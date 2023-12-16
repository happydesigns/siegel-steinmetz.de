<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  caption?: string
  img?: string
}>()
</script>

<template>
  <figure>
    <NuxtImg :src="src" :alt="alt" class="mb-1 border" :class="img" />
    <figcaption class="text-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>
