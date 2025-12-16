<script setup lang="ts">
defineProps<{
  albums?: {
    title: string
    path: string
    coverImage: { src: string, alt?: string } | null
    imageCount: number
  }[]
}>()

const route = useRoute()
const currentAlbumPath = computed(() =>
  Array.isArray(route.params.slug)
    ? route.params.slug.filter(Boolean).join('/')
    : route.params.slug ?? '',
)

const { data: album, error } = await useAlbum(currentAlbumPath)
const images = computed(() => album.value?.images ?? [])
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
              :key="album.path"
              :title="album.title"
              :path="album.path"
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
      v-else-if="currentAlbumPath === ''"
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
    <UPageColumns v-else>
      <img
        v-for="img in images" :key="img.src"
        :src="img.src"
        :alt="img.alt"
        class="w-full rounded-sm border border-neutral-200 dark:border-neutral-800"
        loading="lazy"
      >
    </UPageColumns>
  </UPage>
</template>
