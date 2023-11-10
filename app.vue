<script setup lang="ts">
useHead({
  title: 'Bernd Siegel Steingestaltung',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'de',
  },
})

useSeoMeta({
  description: 'Steingestaltung in Neudenau: Grabmale, Restaurierungen und mehr.'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
