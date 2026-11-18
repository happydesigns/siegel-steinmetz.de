<script setup lang="ts">
definePageMeta({
  variant: 'content',
})

const route = useRoute()
const rootPath = computed(() => {
  const slugParam = route.params.slug

  const slugPath = Array.isArray(slugParam)
    ? slugParam.join('/')
    : (slugParam || '')

  return route.path.replace(new RegExp(`/${slugPath}$`), '')
})

const { data: albums } = await useAlbums()
const { data: page } = await usePageContent({ path: rootPath, collection: 'page' })
const album = computed(() => albums.value?.find(item => item.path === route.path))
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
    <Gallery :albums="albums" />
    <GalleryStudioAlbumEditor v-if="canEdit && album" :key="album.path" ref="editor" :path="album.path" :title="album.title" />
  </NuxtLayout>
</template>
