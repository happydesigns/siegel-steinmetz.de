<script setup lang="ts">
defineProps<{
  albums?: { title: string, path: string }[]
}>()

const route = useRoute()
const currentAlbumPath = computed(() => Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug ?? '')
console.log('Current Album Path:', currentAlbumPath.value, route.params.slug)

const { data: images, error } = await useGalleryImages(currentAlbumPath.value)
console.log('Loaded Images:', images.value)
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside class="block -mt-8 pr-0!">
        <UPageColumns class="overflow-x-auto flex lg:flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
          <Album
            v-for="album in albums"
            :key="album.path"
            :title="album.title"
            :path="album.path"
          />
        </UPageColumns>
      </UPageAside>
    </template>

    <!-- Error State Card -->
    <UPageCard
      v-if="error"
      icon="ph-warning-octagon-duotone"
      title="Fehler beim Laden der Bilder"
      variant="subtle"
      description="Die Bilder konnten nicht geladen werden. Bitte versuchen Sie es später erneut."
    />
    <!-- Placeholder: No Album Selected -->
    <UPageCard
      v-else-if="currentAlbumPath === ''"
      icon="ph-image-duotone"
      title="Album auswählen"
      variant="subtle"
      description="Bitte wählen Sie ein Album aus, um die Bilder anzuzeigen."
    />
    <!-- Placeholder: No Images in Album -->
    <UPageCard
      v-else-if="images?.length === 0"
      icon="ph-images-duotone"
      title="Keine Bilder gefunden"
      variant="subtle"
      description="In diesem Album sind keine Bilder vorhanden."
    />
    <!-- Gallery Images -->
    <UPageColumns>
      <template v-for="img in images" :key="img.src">
        <UTooltip :text="img.title" :content="{ sideOffset: 0 }">
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full rounded-sm border border-neutral-200 dark:border-neutral-800"
            loading="lazy"
          >
        </UTooltip>
      </template>
    </UPageColumns>
  </UPage>
</template>
