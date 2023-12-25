<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
})

const gallery = import.meta.glob('~/assets/gallery/**', { eager: true }) as Record<string, { default: string }>
const album = useAlbum(props.path)
const previewImage = album[0]

function useAlbum(path?: string) {
  if (!path)
    return []
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
  <figure class="!my-0 pt-2 cursor-pointer overflow-hidden min-w-[12rem] lg:min-w-0 flex-1">
    <div class="relative w-full aspect-1">
      <div class="absolute -top-2 h-full inset-x-3 rounded-lg opacity-50 bg-gray-400 border border-black" />
      <div class="absolute -top-1 h-full inset-x-2 rounded-lg bg-gray-400 border border-black" />
      <img :src="previewImage?.src" :alt="previewImage?.alt" class="absolute h-full w-full top-0 rounded-lg m-0 object-cover border border-black">
    </div>
    <figcaption class="font-medium">
      <h3 class="m-0">
        {{ title }}
      </h3>
      {{ album.length }} Bilder
    </figcaption>
  </figure>
</template>
