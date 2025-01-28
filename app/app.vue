<script setup lang="ts">
useHead({
  title: 'Bernd Siegel Steingestaltung',
  titleTemplate: '%s | Bernd Siegel Steingestaltung',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'google-site-verification', content: 'i5hJWTD7u44mb8sXv4PjgwP5EoPz0sWVuHd4rhbV6vk' },
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

const route = useRoute()
const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection('content').path(route.path).first(),
  {
    watch: [route],
  },
)
</script>

<template>
  <UApp>
    <AppHeader :ui="page?.ui?.header" />
    <NuxtPage />
    <AppFooter :ui="page?.ui?.footer" />
  </UApp>
  <span class="display-none lg:col-span-5 fill-neutral-100 dark:fill-raisin pb-0 sm:pb-0 lg:pb-0 bg-gradient-to-b from:gray-800 to:raisin-cool" />
</template>

<style>
:root {
  --color-primary-DEFAULT: var(--color-primary-800);
  --tw-prose-links: var(--color-primary-DEFAULT);
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-serif);
}

img.default {
  border: 1px solid var(--color-neutral-200);
}

p .iconify {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: calc(var(--spacing) * 0.5);
  margin-right: var(--spacing);
}

footer p .iconify {
  font-size: var(--text-base);
}
</style>
