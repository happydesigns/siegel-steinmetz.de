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
      center: 'lg:col-span-1',
    }"
  >
    <template #left>
      <nav aria-label="Fotoalben" class="grid gap-2 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 lg:self-start lg:gap-8 lg:pb-0">
        <Album
          v-for="album in albums"
          :key="album.path"
          :title="album.title"
          :path="album.path"
          :image-count="album.imageCount"
          :cover-image="album.coverImage"
          :cover-aspect-ratio="props.coverAspectRatio"
          :selected="album.path === selectedPath"
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
