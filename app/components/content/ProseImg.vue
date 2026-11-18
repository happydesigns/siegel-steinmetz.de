<script setup lang="ts">
import { ProseImg as UiProseImg } from '@nuxt/ui/components/prose'

const props = defineProps<{ src: string, alt?: string, loading?: 'eager' | 'lazy' }>()
const { photo, useOriginal } = useSitePhoto(() => props.src)
</script>

<template>
  <UiProseImg
    :src :alt="alt ?? ''"
    :provider="photo.provider" :format="photo.format" :modifiers="{ format: photo.format }"
    sizes="384px sm:640px lg:960px" densities="1x 2x"
    :loading="loading ?? 'lazy'" :fetchpriority="loading === 'eager' ? 'high' : undefined"
    :style="photo.width && photo.height ? { aspectRatio: `${photo.width} / ${photo.height}` } : undefined"
    class="bg-muted"
    @error="useOriginal"
  />
</template>
