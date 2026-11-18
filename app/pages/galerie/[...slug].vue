<script setup lang="ts">
definePageMeta({
  key: 'galerie',
  variant: 'content',
})

const route = useRoute()
const { data: albums, error: albumsError } = await useAlbums()
const { data: page } = await usePageContent({ path: '/galerie', collection: 'page' })
const album = computed(() => route.params.slug?.length
  ? albums.value?.find(item => item.path === route.path.replace(/\/$/, ''))
  : albums.value?.find(item => item.imageCount > 0) ?? albums.value?.[0])
const editor = useTemplateRef('editor')
const studio = useRuntimeConfig().public.studio
const studioUser = useState<{ email?: string } | null>('studio-session')
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})

const canEdit = computed(() => mounted.value && album.value && (studio.dev || studioUser.value?.email))
const galleryPage = computed(() => {
  if (!page.value || !canEdit.value) {
    return page.value
  }
  const header = resolvePageHeader(page.value)
  return {
    ...page.value,
    header: {
      ...header,
      ui: { ...header?.ui, wrapper: [header?.ui?.wrapper, 'flex-row items-center justify-between'] },
      links: [
        ...header?.links ?? [],
        { label: 'Albumfotos bearbeiten', icon: 'i-lucide-images', onClick: () => editor.value?.edit() },
      ],
    },
  }
})
</script>

<template>
  <NuxtLayout name="content" :page="galleryPage" collection="page">
    <Gallery v-if="albums?.length" :albums="albums" :album-path="album?.path ?? route.path" />
    <UPageCard
      v-else
      :title="albumsError ? 'Die Alben konnten nicht geladen werden.' : 'Hier sind noch keine Alben veröffentlicht.'"
      variant="subtle"
    />
    <GalleryStudioAlbumEditor v-if="canEdit && album" :key="album.path" ref="editor" :path="album.path" :title="album.title" />
  </NuxtLayout>
</template>
