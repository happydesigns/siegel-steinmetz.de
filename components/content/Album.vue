<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
})

const img = useImage()
const gallery = import.meta.glob('~/assets/gallery/**', { eager: true }) as Record<string, { default: string }>
const album = useAlbum(props.path)
const previewImages = album.slice(0, 4)

function useAlbum(path?: string) {
  if (!path) return []
  const imageList = Object.entries(gallery)
    .filter(([album, _]) => album.includes(`${path}`))
    .map(([_, image]) => {
    return {
      src: image.default,
      alt: image.default.split('/').pop()?.split('.')[0],
    }
  })
  return imageList
}
</script>

<template>
  <UCard :ui="{ body: { background: '' } }">
    <template #header>
      <h2 class="m-0">{{ title }}</h2>
      <p class="mt-2 mb-0">{{ album.length }} Bilder</p>
    </template>

    <div class="grid grid-cols-2 gap-4">
      <img
        v-for="image in previewImages"
        :key="image.src"
        :src="image.src"
        :alt="image.alt"
        class="aspect-1 object-cover m-0 rounded"
      />
    </div>
  </UCard>
</template>
