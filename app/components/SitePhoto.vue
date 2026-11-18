<script setup lang="ts">
const props = defineProps<{ src?: string, alt?: string, sizes?: string }>()
const { photo, useOriginal } = useSitePhoto(() => props.src)
</script>

<template>
  <NuxtImg
    v-bind="photo" :src :alt="alt ?? ''"
    :sizes="sizes ?? '384px sm:320px'" densities="1x 2x"
    class="bg-muted"
    @error="useOriginal"
  />
</template>
