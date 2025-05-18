<script setup lang="ts">
definePageMeta({
  validate: route => !/^\/[^.]*\.[0-9a-z]+(?:\/.*)?$/i.test(route.fullPath),
})

const { data: page } = await usePageContent()
</script>

<template>
  <NuxtLayout name="content">
    <ContentRenderer v-if="page" :value="page" />
  </NuxtLayout>
</template>
