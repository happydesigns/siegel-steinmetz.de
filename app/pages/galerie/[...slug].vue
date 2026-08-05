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
</script>

<template>
  <NuxtLayout name="content" :path="rootPath" collection="page">
    <Gallery :albums="albums" />
  </NuxtLayout>
</template>
