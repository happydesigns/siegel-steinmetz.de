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

const { page } = useContent()
</script>

<template>
  <AppHeader />
  <NuxtPage />
  <AppFooter :ui="page?.ui?.footer" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

:root {
  --color-primary-DEFAULT: var(--color-primary-800);
  --tw-prose-links: var(--color-primary-DEFAULT);
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}

h1, h2, h3, h4, h5, h6 {
  @apply font-serif;
}

img {
  @apply rounded-xl border border-gray-200 dark:border-gray-800;
}
</style>
