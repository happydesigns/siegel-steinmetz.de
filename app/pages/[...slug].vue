<!-- eslint-disable vue/valid-template-root -->
<script setup lang="ts">
definePageMeta({
  validate: (route) => {
    const path = route.fullPath
    // Static Exclusions
    // Exclude paths starting with /_ or /api/, or looking like files
    if (path.startsWith('/_') || path.startsWith('/api/') || /^\/[^.]*\.[0-9a-z]+(?:\/.*)?$/i.test(path)) {
      return false
    }
    return true
  },
})

const { data: page } = await usePageContent()
</script>

<template>
  <NuxtLayout name="content">
    <ContentRenderer v-if="page" :value="page" />
  </NuxtLayout>
</template>
