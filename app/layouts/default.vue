<script setup lang="ts">
const { data: page } = await useContentPage()

usePageSeo(page)
</script>

<template>
  <UMain :class="page?.ui?.main" class="break-words">
    <slot />
  </UMain>
</template>
