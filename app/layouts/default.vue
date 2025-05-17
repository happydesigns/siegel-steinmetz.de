<script setup lang="ts">
const { data: page } = await useContentPage()

useSeoMeta({
  title: page.value?.seo?.title,
  ogTitle: page.value?.seo?.title,
  description: page.value?.seo?.description,
  ogDescription: page.value?.seo?.description,
})
</script>

<template>
  <UMain :class="page?.ui?.main" class="break-words">
    <slot />
  </UMain>
</template>
