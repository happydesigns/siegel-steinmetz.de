<script setup lang="ts">
import type { ObjectDirective } from 'vue'

const props = defineProps<{ src?: string, alt?: string, sizes?: string, quality?: number, loading?: 'eager' | 'lazy' }>()
const { photo, useOriginal } = useSitePhoto(() => props.src)
const image = useImage()
const element = useTemplateRef('element')

// IPX prerenders its native modifier paths. Cloudflare serves those static files
// at URLs with encoded separators; emit those URLs only for the static provider.
function assetUrl(value: string | undefined) {
  if (!value || image.options.provider !== 'ipxStatic') {
    return value
  }
  return value.replace(/\/_ipx\/[^/\s]+/g, modifiers => modifiers.replaceAll('&', '%26'))
}

const sources = computed(() => {
  const { width, height, format, provider } = photo.value
  if (!props.src || provider === 'none') {
    return { src: props.src }
  }
  const variants = image.getSizes(props.src, {
    sizes: props.sizes ?? '384px sm:320px',
    densities: '1x 2x',
    modifiers: { width, height, format, quality: props.quality ?? image.options.quality },
  })
  return {
    sizes: props.loading === 'lazy' ? `auto, ${variants.sizes}` : variants.sizes,
    srcset: assetUrl(variants.srcset),
    src: assetUrl(variants.src),
  }
})

onMounted(() => {
  const img = element.value
  if (img?.complete && img.currentSrc && !img.naturalWidth) {
    useOriginal()
  }
})

// On client navigation, set loading before Vue assigns the image candidates.
const vImageLoading: ObjectDirective<HTMLImageElement, typeof props.loading> = {
  created(image, { value }) {
    if (value) {
      image.loading = value
    }
  },
}
</script>

<template>
  <img
    ref="element"
    v-image-loading="loading"
    :width="photo.width" :height="photo.height" :alt="alt ?? ''" :loading
    v-bind="sources"
    class="bg-muted"
    @error="useOriginal"
  >
</template>
