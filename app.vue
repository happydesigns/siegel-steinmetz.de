<script setup lang="ts">
useHead({
  title: 'Bernd Siegel Steingestaltung',
  titleTemplate: '%s | Bernd Siegel Steingestaltung',
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
  description: 'Steingestaltung in Neudenau: Grabmale, Restaurierungen und mehr.',
})
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>

<style>
:root {
  --color-primary-DEFAULT: var(--color-primary-800);
  --tw-prose-links: var(--color-primary-DEFAULT);
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}
</style>
