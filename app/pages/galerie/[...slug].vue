<script setup lang="ts">
const route = useRoute()
const rootPath = computed(() => {
  const slugParam = route.params.slug

  const slugPath = Array.isArray(slugParam)
    ? slugParam.join('/')
    : (slugParam || '')

  return route.path.replace(new RegExp(`/${slugPath}$`), '')
})

const { data: albums } = await useAlbums()
const { data: page } = await usePageContent({
  path: () => rootPath.value,
  collection: () => 'page',
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `page ${rootPath.value} not found`,
    fatal: true,
  })
}

usePageSeo(page)

const header = computed(() => resolvePageHeader(page.value))
</script>

<template>
  <UContainer v-if="page">
    <UPageHeader v-if="header" v-bind="header" />

    <UPageBody>
      <Gallery :albums="albums" />
    </UPageBody>
  </UContainer>
</template>
