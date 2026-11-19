<script setup lang="ts">
import type { ObjectDirective } from 'vue'

const props = defineProps<{
  src?: string
  alt?: string
  sizes?: string
  galleryThumbnail?: boolean
  loading?: 'eager' | 'lazy'
  fetchpriority?: 'high' | 'low' | 'auto'
}>()
const { photo, useOriginal } = useSitePhoto(() => props.src)
const image = useImage()
const element = useTemplateRef('element')
const failedAvif = ref<string>()

// IPX prerenders its native modifier paths. Cloudflare serves those static files
// at URLs with encoded separators; emit those URLs only for the static provider.
function assetUrl(value: string | undefined) {
  if (!value || image.options.provider !== 'ipxStatic') {
    return value
  }
  return value.replace(/\/_ipx\/[^/\s]+/g, modifiers => modifiers.replaceAll('&', '%26'))
}

function candidates(src: string, format: string, quality: number | undefined) {
  const { width, height } = photo.value
  const variants = image.getSizes(src, {
    sizes: props.sizes ?? '384px sm:320px',
    densities: '1x 2x',
    modifiers: { width, height, format, quality },
  })
  return {
    sizes: props.loading === 'lazy' ? `auto, ${variants.sizes}` : variants.sizes,
    srcset: assetUrl(variants.srcset),
    src: assetUrl(variants.src),
  }
}

const avif = computed(() => props.galleryThumbnail && props.src && photo.value.provider !== 'none' && failedAvif.value !== props.src
  ? candidates(props.src, 'avif', 50)
  : undefined)

const imgAttrs = computed(() => {
  const { width, height, format, provider } = photo.value
  const sources = props.src && format && provider !== 'none'
    ? candidates(props.src, format, props.galleryThumbnail ? 70 : image.options.quality)
    : { src: props.src }
  return { width, height, alt: props.alt ?? '', loading: props.loading, fetchpriority: props.fetchpriority, ...sources }
})

function retryImage() {
  if (avif.value && element.value?.currentSrc.includes('/_ipx/f_avif')) {
    failedAvif.value = props.src
  }
  else {
    useOriginal()
  }
}

onMounted(() => {
  const img = element.value
  if (img?.complete && img.currentSrc && !img.naturalWidth) {
    retryImage()
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
  <picture v-if="galleryThumbnail" class="block overflow-hidden bg-muted">
    <source v-if="avif" type="image/avif" :sizes="avif.sizes" :srcset="avif.srcset">
    <img
      ref="element" v-image-loading="loading" v-bind="imgAttrs"
      class="block size-full [object-fit:inherit] [object-position:inherit]" @error="retryImage"
    >
  </picture>
  <img
    v-else ref="element"
    v-image-loading="loading"
    v-bind="imgAttrs"
    class="bg-muted"
    @error="useOriginal"
  >
</template>
