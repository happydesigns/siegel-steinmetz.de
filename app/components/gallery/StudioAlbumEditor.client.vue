<script setup lang="ts">
import type { AlbumPhoto } from '~/utils/studioAlbum'
import { isAlbumFile } from '~~/shared/utils/albumFileUsage'
import { albumSnapshot, checkPhoto, deleteUnusedAlbumFiles, openAlbumDraft, photoTypes, studioAlbumSession, uploadAlbumPhoto } from '~/utils/studioAlbum'

interface PhotoRow {
  key: string
  photo: AlbumPhoto
  file?: File
  preview: string
}

const props = defineProps<{ path: string, title: string }>()
const open = ref(false)
const busy = ref(false)
const error = ref('')
const rows = ref<PhotoRow[]>([])
const cover = ref('')
const expanded = ref('')
const toast = useToast()
const filePath = computed(() => `${props.path.slice(1)}.yaml`)
const folder = computed(() => props.path.replace(/^\/galerie\//, 'assets/gallery/'))
const savedPaths = shallowRef<string[]>([])
const deleteFiles = ref(false)
const removedFiles = computed(() => {
  const remaining = new Set(rows.value.map(row => row.photo.src))
  return savedPaths.value.filter(src => !remaining.has(src) && isAlbumFile(src, folder.value))
})
let baseline = ''
let originalCover: AlbumPhoto | null = null
const coverKey = computed(() => cover.value || (!originalCover ? rows.value[0]?.key : undefined))
const previews = new Set<string>()

function releasePreviews() {
  for (const url of previews) {
    URL.revokeObjectURL(url)
  }
  previews.clear()
}
onBeforeUnmount(releasePreviews)

defineExpose({ edit })

async function edit() {
  if (busy.value) {
    return
  }
  busy.value = true
  try {
    const session = studioAlbumSession()
    const doc = await openAlbumDraft(session, filePath.value)
    baseline = albumSnapshot(doc)
    savedPaths.value = [...new Set((doc.images ?? []).map(photo => photo.src))]
    deleteFiles.value = false
    releasePreviews()
    rows.value = (doc.images ?? []).map(photo => ({
      key: crypto.randomUUID(),
      photo: { ...photo },
      preview: photo.src,
    }))
    originalCover = doc.coverImage ? { ...doc.coverImage } : null
    cover.value = rows.value.find(row => row.photo.src === originalCover?.src)?.key ?? ''
    expanded.value = ''
    error.value = ''
    open.value = true
  }
  catch (cause) {
    toast.add({ title: String(cause instanceof Error ? cause.message : cause), color: 'error' })
  }
  finally {
    busy.value = false
  }
}

function addFiles(files?: unknown[] | null) {
  error.value = ''
  for (const file of files ?? []) {
    if (!(file instanceof File)) {
      continue
    }
    try {
      checkPhoto(file)
      const preview = URL.createObjectURL(file)
      previews.add(preview)
      rows.value.push({ key: crypto.randomUUID(), file, preview, photo: { src: '' } })
    }
    catch (cause) {
      error.value += `${cause instanceof Error ? cause.message : cause} `
    }
  }
}

function addFromLibrary(paths: string[]) {
  rows.value.push(...paths.map(src => ({ key: crypto.randomUUID(), photo: { src }, preview: src })))
}

function move(index: number, offset: number) {
  const [row] = rows.value.splice(index, 1)
  if (row) {
    rows.value.splice(index + offset, 0, row)
  }
}

function remove(row: PhotoRow) {
  deleteFiles.value = false
  rows.value = rows.value.filter(other => other.key !== row.key)
  if (cover.value === row.key) {
    cover.value = ''
    originalCover = null
  }
}

async function save() {
  if (busy.value) {
    return
  }
  busy.value = true
  error.value = ''
  try {
    const session = studioAlbumSession()
    const path = filePath.value
    const targetFolder = folder.value
    async function latest() {
      const doc = await openAlbumDraft(session, path)
      if (baseline !== albumSnapshot(doc)) {
        throw new Error('Das Album wurde inzwischen geändert. Bitte erneut öffnen.')
      }
      return doc
    }
    await latest()
    if (rows.value.some(row => row.file)) {
      const paths = new Set((await session.hostMedia.list()).map(item => `/${item.fsPath.replace(/^\/+/, '')}`))
      for (const row of rows.value) {
        if (!row.file) {
          continue
        }
        row.photo.src = await uploadAlbumPhoto(session, targetFolder, row.file, paths)
        savedPaths.value = [...savedPaths.value, row.photo.src]
        row.file = undefined
      }
    }
    const doc = await latest()
    const selected = rows.value.find(row => row.key === cover.value)?.photo
    const next = { ...doc, images: rows.value.map(row => ({ ...row.photo })) }
    if (selected && selected.src !== originalCover?.src) {
      next.coverImage = { ...selected }
    }
    else if (selected && originalCover) {
      next.coverImage = { ...originalCover }
    }
    else if (!originalCover) {
      delete next.coverImage
    }
    if (baseline !== albumSnapshot(next)) {
      const draft = await session.documents.update(path, next)
      draft.version = (draft.version ?? 0) + 1
      if (session.dev) {
        const saved = await session.hostDocument.get(path)
        if (!saved || albumSnapshot(saved) !== albumSnapshot(next)) {
          throw new Error('Bitte den lokalen Speicherstand prüfen und das Album erneut öffnen.')
        }
      }
      baseline = albumSnapshot(next)
    }
    const kept = deleteFiles.value && removedFiles.value.length
      ? await deleteUnusedAlbumFiles(session, targetFolder, removedFiles.value)
      : []
    await refreshNuxtData(['albums-list', `albums:${props.path}`])
    open.value = false
    toast.add({ title: session.dev ? 'Album lokal gespeichert' : 'Album als Studio-Entwurf gespeichert', color: 'success' })
    if (kept.length) {
      toast.add({ title: 'Weiterhin verwendete Dateien behalten', description: kept.join(', ') })
    }
  }
  catch (cause) {
    error.value = cause instanceof Error ? cause.message : 'Das Album konnte nicht gespeichert werden.'
  }
  finally {
    busy.value = false
  }
}
</script>

<template>
  <UModal v-model:open="open" :title="title" description="Albumfotos bearbeiten" :dismissible="!busy" :close="!busy" :ui="{ content: 'sm:max-w-2xl' }">
    <template #body>
      <fieldset :disabled="busy" class="space-y-4">
        <UFileUpload :model-value="[]" multiple :accept="Object.values(photoTypes).join(',')" label="Fotos hinzufügen" description="Bilder hier ablegen oder auswählen · bis 10 MB pro Foto" @update:model-value="addFiles" @reject="error = 'Dieses Bildformat wird nicht unterstützt.'" />
        <GalleryAlbumMediaPicker :album-paths="rows.map(row => row.photo.src)" @add="addFromLibrary" />
        <ol class="divide-y divide-default">
          <li v-for="(row, index) in rows" :key="row.key" class="py-2">
            <div class="flex items-center gap-2">
              <button type="button" class="flex min-w-0 flex-1 items-center gap-2 text-start text-sm" :aria-expanded="expanded === row.key" @click="expanded = expanded === row.key ? '' : row.key">
                <img :src="row.preview" alt="" class="size-12 shrink-0 rounded object-cover" loading="lazy">
                <span class="line-clamp-2">{{ row.photo.alt || row.file?.name || row.photo.src.split('/').pop() }}</span>
              </button>
              <UTooltip :text="coverKey === row.key ? 'Aktuelles Titelbild' : 'Als Titelbild wählen'" :delay-duration="500">
                <UButton
                  :icon="coverKey === row.key ? 'i-ph-star-fill' : 'i-ph-star'"
                  :ui="coverKey === row.key ? { leadingIcon: 'text-primary' } : undefined"
                  :aria-pressed="coverKey === row.key"
                  aria-label="Als Titelbild wählen"
                  size="xs"
                  color="neutral"
                  variant="ghost"
                  @click="cover = row.key"
                />
              </UTooltip>
              <UTooltip text="Nach oben verschieben" :delay-duration="500" :disabled="index === 0">
                <UButton icon="i-lucide-arrow-up" aria-label="Nach oben verschieben" size="xs" color="neutral" variant="ghost" :disabled="index === 0" @click="move(index, -1)" />
              </UTooltip>
              <UTooltip text="Nach unten verschieben" :delay-duration="500" :disabled="index === rows.length - 1">
                <UButton icon="i-lucide-arrow-down" aria-label="Nach unten verschieben" size="xs" color="neutral" variant="ghost" :disabled="index === rows.length - 1" @click="move(index, 1)" />
              </UTooltip>
              <UTooltip text="Aus Album entfernen" :delay-duration="500">
                <UButton icon="i-lucide-x" aria-label="Aus Album entfernen" size="xs" color="neutral" variant="ghost" @click="remove(row)" />
              </UTooltip>
            </div>
            <div v-if="expanded === row.key" class="mt-2 grid gap-2">
              <UFormField label="Alternativtext">
                <UInput v-model="row.photo.alt" class="w-full" />
              </UFormField>
              <UFormField label="Bildunterschrift">
                <UTextarea v-model="row.photo.caption" class="w-full" />
              </UFormField>
            </div>
          </li>
        </ol>
      </fieldset>
    </template>
    <template #footer>
      <div class="w-full space-y-2">
        <UCheckbox
          v-if="removedFiles.length"
          v-model="deleteFiles"
          :disabled="busy"
          :label="removedFiles.length === 1
            ? `Auch die Datei „${removedFiles[0]?.split('/').pop()}“ aus dem Albumordner löschen`
            : `Auch die ${removedFiles.length} entfernten Dateien aus dem Albumordner löschen`"
          description="Beim Speichern werden nur Dateien gelöscht, die in keinem Studio-Inhalt mehr verwendet werden."
        />
        <p v-if="error" role="alert" class="text-sm text-error">
          {{ error }}
        </p>
        <div class="flex justify-end gap-2">
          <UButton label="Abbrechen" variant="ghost" color="neutral" :disabled="busy" @click="open = false" />
          <UButton label="Änderungen speichern" :loading="busy" @click="save" />
        </div>
      </div>
    </template>
  </UModal>
</template>
