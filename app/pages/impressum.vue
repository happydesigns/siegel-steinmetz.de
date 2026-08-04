<script setup lang="ts">
const { data: page } = await usePageContent({ collection: 'page' })

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Impressum not found', fatal: true })
}
</script>

<template>
  <NuxtLayout name="page" collection="page">
    <ContentRenderer v-if="page" :value="page" />
  </NuxtLayout>
</template>
