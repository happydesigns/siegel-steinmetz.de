<script setup lang="ts">
defineProps<{
  images: { src: string, alt?: string }[]
}>()
</script>

<template>
  <div class="grid gap-4 grid-flow-dense grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    <img
      v-for="(img, index) in images"
      :key="img.src"
      :src="img.src"
      :alt="img.alt"
      class="w-full h-full object-cover rounded-sm border border-neutral-200 dark:border-neutral-800"
      :class="index % 6 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'"
      loading="lazy"
    >
  </div>
</template>
