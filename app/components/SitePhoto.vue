<script setup lang="ts">
import type { ObjectDirective } from 'vue'

const props = defineProps<{ src?: string, alt?: string, sizes?: string, loading?: 'eager' | 'lazy' }>()
const { photo, useOriginal } = useSitePhoto(() => props.src)

// On client navigation, set loading before NuxtImg assigns srcset and starts a request.
const vImageLoading: ObjectDirective<HTMLImageElement, typeof props.loading> = {
  created(image, { value }) {
    if (value) {
      image.loading = value
    }
  },
}
</script>

<template>
  <NuxtImg
    v-image-loading="loading"
    v-bind="photo" :src :alt="alt ?? ''"
    :loading
    :sizes="sizes ?? '384px sm:320px'" densities="1x 2x"
    class="bg-muted"
    @error="useOriginal"
  />
</template>
