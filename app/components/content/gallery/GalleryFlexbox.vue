<script setup lang="ts">
defineProps<{
  images: { src: string, alt?: string }[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-4 after:content-[''] after:grow-99999 after:block">
    <img
      v-for="img in images"
      :key="img.src"
      :src="img.src"
      :alt="img.alt"
      class="h-108 grow object-cover rounded-sm border border-default"
      loading="lazy"
    >
  </div>
</template>
