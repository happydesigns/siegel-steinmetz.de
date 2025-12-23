<script setup lang="ts">
import { GalleryBento, GalleryFlexbox, GalleryMasonry } from '#components'

const props = withDefaults(defineProps<{
  albums?: {
    title: string
    slug: string
    coverImage: { src: string, alt?: string } | null
    imageCount: number
  }[]
  layout?: 'bento' | 'flexbox' | 'masonry'
}>(), {
  layout: 'masonry',
})

const route = useRoute()
const currentAlbumSlug = computed(() =>
  Array.isArray(route.params.slug)
    ? route.params.slug.filter(Boolean).join('/')
    : route.params.slug ?? '',
)

const { data: currentAlbum, error } = await useAlbum(currentAlbumSlug)
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
  <UPage :ui="{ root: 'lg:grid-cols-[minmax(80px,1fr)_minmax(80px,1fr)_repeat(8,minmax(0,1fr))]!' }">
    <template #left>
      <UPageAside class="block -mt-8 pr-0!">
        <div class="overflow-y-auto max-h-[calc(100vh-var(--ui-header-height)-4rem)]">
          <UPageColumns
            class="flex lg:flex-col gap-4 sm:gap-6 lg:gap-8 w-full space-y-0"
          >
            <Album
              v-for="album in albums"
              :key="album.slug"
              :title="album.title"
              :slug="album.slug"
              :image-count="album.imageCount"
              :cover-image="album.coverImage"
              class="box-border"
            />
          </UPageColumns>
        </div>
      </UPageAside>
    </template>

    <UPageCard
      v-if="error"
      icon="ph-warning-octagon-duotone"
      title="Fehler beim Laden der Bilder"
      variant="subtle"
      description="Die Bilder konnten nicht geladen werden. Bitte versuchen Sie es später erneut."
    />
    <UPageCard
      v-else-if="currentAlbumSlug === ''"
      icon="ph-image-duotone"
      title="Album auswählen"
      variant="subtle"
      description="Bitte wählen Sie ein Album aus, um die Bilder anzuzeigen."
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
