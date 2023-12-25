<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  caption?: string
}>()
</script>

<template>
  <figure>
    <NuxtImg placeholder :src="src" :alt="alt" class="mb-1 border border-gray-200 dark:border-gray-800 w-96 lg:w-[28rem] rounded" />
    <figcaption class="text-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>
