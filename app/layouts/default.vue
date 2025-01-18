<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first()) as any

useSeoMeta({
  title: page.value.seo?.title,
  ogTitle: page.value.seo?.title,
  description: page.value.seo?.description,
  ogDescription: page.value.seo?.description,
})
</script>

<template>
  <UMain :class="page?.ui?.wrapper" class="break-words">
    <UPageBody :prose="page?.prose !== false" class="pb-32" :class="[page?.ui?.body]">
      <slot />
    </UPageBody>
  </UMain>
</template>
