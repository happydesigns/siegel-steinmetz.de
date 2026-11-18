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

onMounted(revealSelectedAlbum)
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
      <nav ref="albumNav" aria-label="Fotoalben" class="flex gap-4 max-lg:-mx-1 max-lg:mb-6 max-lg:overflow-x-auto max-lg:p-1 lg:grid lg:self-start lg:gap-8">
        <Album
          v-for="album in albums"
          :key="album.path"
          :title="album.title"
          :path="album.path"
          :image-count="album.imageCount"
          :cover-image="album.coverImage"
          :cover-aspect-ratio="props.coverAspectRatio"
          :selected="album.path === selectedPath"
          class="max-lg:w-38 max-lg:shrink-0 sm:max-lg:w-48"
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
</template>
