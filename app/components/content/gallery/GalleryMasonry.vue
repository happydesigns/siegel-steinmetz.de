<script setup lang="ts">
defineProps<{
  images: { src: string, alt?: string }[]
}>()
</script>

<template>
  <UPageColumns class="gap-4">
    <SitePhoto
      v-for="(img, index) in images"
      :key="img.src"
      :src="img.src"
      :alt="img.alt"
      class="w-full h-auto mb-4 rounded-sm border border-default"
      :loading="index === 0 ? 'eager' : 'lazy'"
    />
  </UPageColumns>
</template>
