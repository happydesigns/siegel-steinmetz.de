<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
})

const images = useImages(props.path)
const previewImage = images[0]
</script>

<template>
  <figure class="!my-0 pt-2 cursor-pointer overflow-hidden min-w-[12rem] lg:min-w-0 flex-1" @click="$emit('selectAlbum', path, images)">
    <div class="relative w-full aspect-1">
      <div class="absolute -top-2 h-full inset-x-3 rounded-lg opacity-50 bg-gray-400 border border-gray-700 dark:border-black" />
      <div class="absolute -top-1 h-full inset-x-2 rounded-lg bg-gray-400 border border-gray-700 dark:border-black" />
      <img :src="previewImage?.src" :alt="previewImage?.alt" class="absolute h-full w-full top-0 rounded-lg m-0 object-cover border border-gray-700 dark:border-black">
    </div>
    <figcaption class="font-medium">
      <h3 class="m-0">
        {{ title }}
      </h3>
      {{ images.length }} Bilder
    </figcaption>
  </figure>
</template>
