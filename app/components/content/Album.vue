<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
})

defineEmits(['selectAlbum'])

const images = useImages(props.path)
const previewImage = images[0]
</script>

<template>
  <figure class="!my-0 pt-2 cursor-pointer overflow-hidden min-w-[12rem] lg:min-w-0 flex-1" @click="$emit('selectAlbum', path, images)">
    <div class="relative w-full aspect-1">
      <div class="absolute -top-2 h-full inset-x-2.5 rounded-md opacity-50 bg-gray-400 border border-gray-200 dark:border-gray-900" />
      <div class="absolute -top-1 h-full inset-x-1.5 rounded-md bg-gray-400 border border-gray-200 dark:border-gray-900" />
      <img :src="previewImage?.src" :alt="previewImage?.alt" class="absolute h-full w-full top-0 rounded-md m-0 object-cover border border-gray-200 dark:border-gray-900">
    </div>
    <figcaption class="font-medium">
      <h3 class="m-0 font-sans">
        {{ title }}
      </h3>
      {{ images.length }} Bilder
    </figcaption>
  </figure>
</template>
