<script setup lang="ts">
const { data: page } = await usePageContent()

usePageSeo(page)
</script>

<template>
  <AppHeader />

  <UMain class="break-words">
    <slot />
  </UMain>

  <AppFooter />
</template>
