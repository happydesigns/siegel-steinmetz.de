<script setup lang="ts">
const path = ref('/galerie')

const { data: albums } = await useAlbums()

console.log({ albums })
</script>

<template>
  <NuxtLayout :key="$route.fullPath" name="content" :path="path">
    <Gallery :albums="albums" />
  </NuxtLayout>
</template>
