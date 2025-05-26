<script setup lang="ts">
const path = ref('/galerie')

const albums = [
  { title: 'Grabmallager', path: 'grabmallager' },
  { title: 'Grabmalreferenzen', path: 'grabmalreferenzen' },
  { title: 'Restaurierungen', path: 'restaurierungen' },
]
</script>

<template>
  <NuxtLayout :key="$route.fullPath" name="content" :path="path">
    <Gallery :albums />
  </NuxtLayout>
</template>
