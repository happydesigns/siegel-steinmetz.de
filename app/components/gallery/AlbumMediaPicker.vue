<script setup lang="ts">
import type { TreeItem } from 'nuxt-studio/app'
import { studioAlbumSession } from '~/utils/studioAlbum'

const props = defineProps<{ albumPaths: string[] }>()
const emit = defineEmits<{ add: [paths: string[]] }>()
const open = ref(false)
const media = shallowRef<string[]>([])
const selected = ref(new Set<string>())
const filter = ref('')
const error = ref('')
const inAlbum = computed(() => new Set(props.albumPaths))
const results = computed(() => {
  const query = filter.value.trim().toLowerCase()
  return media.value.filter(path => path.toLowerCase().includes(query))
})

function setOpen(value: boolean) {
  open.value = value
  if (!value) {
    return
  }
  filter.value = ''
  selected.value.clear()
  error.value = ''
  const paths = new Set<string>()
  function collect(items: TreeItem[]) {
    for (const item of items) {
      if (item.status === 'deleted') {
        continue
      }
      if (item.type === 'file' && /\.(?:jpe?g|png|webp|avif)$/i.test(item.fsPath)) {
        paths.add(item.routePath || `/${item.fsPath.replace(/^\/+/, '')}`)
      }
      if (item.children) {
        collect(item.children)
      }
    }
  }
  try {
    collect(studioAlbumSession().getMediaTree())
  }
  catch {
    error.value = 'Die Mediathek ist gerade nicht verfügbar. Bitte die Auswahl erneut öffnen.'
  }
  media.value = [...paths].sort()
}

function toggle(path: string) {
  if (selected.value.has(path)) {
    selected.value.delete(path)
  }
  else {
    selected.value.add(path)
  }
}

function add() {
  emit('add', [...selected.value])
  open.value = false
}
</script>

<template>
  <UModal :open="open" title="Aus Mediathek wählen" :ui="{ content: 'sm:max-w-3xl h-[min(44rem,calc(100dvh-2rem))]', body: 'flex min-h-0 flex-col overflow-hidden p-0 sm:p-0' }" @update:open="setOpen">
    <UButton label="Aus Mediathek wählen" color="neutral" variant="outline" />
    <template #body>
      <div class="shrink-0 px-4 py-3 sm:px-6">
        <UInput v-model="filter" aria-label="Mediathek durchsuchen" icon="i-lucide-search" placeholder="Dateiname oder Ordner suchen" class="w-full" />
      </div>
      <p v-if="error || !results.length" class="px-4 pb-4 text-sm text-muted sm:px-6" role="status">
        {{ error || (filter ? 'Keine passenden Bilder gefunden.' : 'Die Mediathek enthält noch keine Fotos.') }}
      </p>
      <div v-else class="grid min-h-0 grid-cols-2 gap-3 overflow-y-auto px-4 pt-1 pb-4 sm:grid-cols-4 sm:px-6">
        <button
          v-for="path in results" :key="path" type="button"
          class="group min-w-0 rounded text-start focus-visible:outline-primary disabled:opacity-60"
          :disabled="inAlbum.has(path)" :aria-pressed="selected.has(path) || inAlbum.has(path)"
          :aria-label="inAlbum.has(path) ? `${path.split('/').pop()}, bereits im Album` : path.split('/').pop()"
          @click="toggle(path)"
        >
          <span class="relative block overflow-hidden rounded" :class="selected.has(path) ? 'border-2 border-primary bg-default p-px' : 'border border-default'">
            <img :src="path" alt="" loading="lazy" class="aspect-square w-full object-cover">
            <span v-if="selected.has(path) || inAlbum.has(path)" class="absolute end-1 top-1 grid size-6 place-items-center rounded-full" :class="selected.has(path) ? 'bg-primary text-inverted' : 'bg-default text-default'">
              <UIcon name="i-lucide-check" />
            </span>
          </span>
          <span class="mt-1 block truncate text-xs">{{ path.split('/').pop() }}</span>
        </button>
      </div>
    </template>
    <template #footer>
      <div class="flex w-full justify-end gap-2">
        <UButton label="Abbrechen" color="neutral" variant="ghost" @click="open = false" />
        <UButton :disabled="!selected.size" :label="selected.size === 1 ? '1 Foto hinzufügen' : selected.size ? `${selected.size} Fotos hinzufügen` : 'Fotos hinzufügen'" @click="add" />
      </div>
    </template>
  </UModal>
</template>
