<script setup lang="ts">
defineProps<{
  images: { src: string, alt?: string }[]
}>()
</script>

<template>
  <UPageColumns class="gap-4">
    <img
      v-for="img in images"
      :key="img.src"
      :src="img.src"
      :alt="img.alt"
      class="w-full h-auto mb-4 rounded-sm border border-default"
      loading="lazy"
    >
  </UPageColumns>
</template>
