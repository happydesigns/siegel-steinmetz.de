<script setup lang="ts">
import type { AlbumSummary } from '~/composables/useAlbums'
import GalleryBento from './gallery/GalleryBento.vue'
import GalleryFlexbox from './gallery/GalleryFlexbox.vue'
import GalleryMasonry from './gallery/GalleryMasonry.vue'

const props = withDefaults(defineProps<{
  albums?: AlbumSummary[]
  albumPath?: string
  /** Desktop cover width divided by height. Omit to keep each photo's original ratio. */
  coverAspectRatio?: number
  layout?: 'bento' | 'flexbox' | 'masonry'
}>(), {
  layout: 'masonry',
})

const route = useRoute()
const selectedPath = computed(() => props.albumPath ?? route.path)
const albumNav = useTemplateRef('albumNav')
const pastAlbums = ref(false)
let albumObserver: IntersectionObserver | undefined

function revealSelectedAlbum() {
  const nav = albumNav.value
  if (!nav || nav.scrollWidth <= nav.clientWidth) {
    return
  }

  const active = nav.querySelector('a[aria-current="true"]')
  if (!active) {
    return
  }

  const card = active.getBoundingClientRect()
  const strip = nav.getBoundingClientRect()
  const inset = Number.parseFloat(getComputedStyle(nav).paddingInlineStart)
  if (card.left < strip.left + inset) {
    nav.scrollLeft += card.left - strip.left - inset
  }
  else if (card.right > strip.right - inset) {
    nav.scrollLeft += card.right - strip.right + inset
  }
}

function returnToAlbums() {
  const nav = albumNav.value
  if (!nav) {
    return
  }
  nav.focus({ preventScroll: true })
  nav.scrollIntoView({
    block: 'start',
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  })
}

onMounted(() => {
  revealSelectedAlbum()
  if (albumNav.value) {
    albumObserver = new IntersectionObserver(([entry]) => {
      if (entry) {
        pastAlbums.value = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0
      }
    })
    albumObserver.observe(albumNav.value)
  }
})
onBeforeUnmount(() => albumObserver?.disconnect())
watch(selectedPath, revealSelectedAlbum, { flush: 'post' })

const { data: currentAlbum, error } = await useAlbum(selectedPath)
const images = computed(() => currentAlbum.value?.images ?? [])

const GalleryComponent = computed(() => {
  switch (props.layout) {
    case 'flexbox':
      return GalleryFlexbox
    case 'masonry':
      return GalleryMasonry
    case 'bento':
    default:
      return GalleryBento
  }
})
</script>

<template>
  <UPage
    :ui="{
      root: 'lg:grid-cols-[13rem_minmax(0,1fr)]!',
      left: 'lg:col-span-1',
      center: '@container min-w-0 lg:col-span-1',
    }"
  >
    <template #left>
      <nav ref="albumNav" aria-label="Fotoalben" tabindex="-1" class="flex scroll-mt-[calc(var(--ui-header-height)+1rem)] gap-3 max-lg:-mx-1 max-lg:mb-6 max-lg:overflow-x-auto max-lg:p-1 sm:gap-4 lg:grid lg:self-start lg:gap-8">
        <Album
          v-for="album in albums"
          :key="album.path"
          :title="album.title"
          :path="album.path"
          :image-count="album.imageCount"
          :cover-image="album.coverImage"
          :cover-aspect-ratio="props.coverAspectRatio"
          :selected="album.path === selectedPath"
          class="max-lg:w-40 max-lg:shrink-0 sm:max-lg:w-48"
        />
      </nav>
    </template>

    <UPageCard
      v-if="error"
      icon="ph-warning-octagon-duotone"
      title="Fehler beim Laden der Bilder"
      variant="subtle"
      description="Die Bilder konnten nicht geladen werden. Bitte versuchen Sie es später erneut."
    />
    <UPageCard
      v-else-if="images?.length === 0"
      icon="ph-images-duotone"
      title="Keine Bilder gefunden"
      variant="subtle"
      description="In diesem Album sind keine Bilder vorhanden."
    />
    <component :is="GalleryComponent" v-else :images="images" />
  </UPage>
  <UButton
    v-if="pastAlbums && albums?.length"
    label="Zu den Alben"
    icon="i-lucide-arrow-up"
    color="neutral"
    variant="outline"
    class="fixed end-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-20 min-h-11 rounded-full bg-default px-4 shadow-sm"
    @click="returnToAlbums"
  />
</template>
