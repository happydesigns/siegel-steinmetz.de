<script setup lang="ts">
definePageMeta({
  validate: route => !/^\/[^.]*\.[0-9a-z]+(?:\/.*)?$/i.test(route.fullPath),
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())
</script>

<template>
  <NuxtLayout name="content">
    <ContentRenderer v-if="page" :value="page" :prose="page.layout?.prose !== false" />
  </NuxtLayout>
</template>
