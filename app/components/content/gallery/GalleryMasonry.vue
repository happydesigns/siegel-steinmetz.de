<script setup lang="ts">
defineProps<{
  images: { src: string, alt?: string }[]
}>()
</script>

<template>
  <UPageColumns class="gallery-photos gap-3 space-y-3 sm:gap-4 sm:space-y-4">
    <SitePhoto
      v-for="(img, index) in images"
      :key="img.src"
      :src="img.src"
      :alt="img.alt"
      class="block w-full h-auto rounded-sm border border-default"
      :loading="index === 0 ? 'eager' : 'lazy'"
    />
  </UPageColumns>
</template>

<style scoped>
.gallery-photos {
  columns: 10rem 2;
}

@container (min-width: 39rem) {
  .gallery-photos {
    column-count: 3;
  }
}
</style>
