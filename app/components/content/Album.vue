<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
})

const { data: images, pending, error } = await useGalleryImages(props.path)

const coverImage = computed(() => {
  return images.value?.length > 0 ? images.value[0] : null
})
</script>

<template>
  <NuxtLink :to="`/galerie/${props.path}`" replace>
    <figure class="!my-0 pt-2 cursor-pointer overflow-hidden min-w-[12rem] lg:min-w-0 flex-1">
      <div class="relative w-full aspect-square">
        <div class="absolute -top-2 h-full inset-x-2.5 rounded-sm opacity-50 bg-neutral-400 border border-neutral-200 dark:border-neutral-900" />
        <div class="absolute -top-1 h-full inset-x-1.5 rounded-sm bg-neutral-400 border border-neutral-200 dark:border-neutral-900" />

        <USkeleton v-if="pending" class="absolute h-full w-full top-0 rounded-sm m-0 bg-neutral-200 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-900 flex items-center justify-center" />

        <img v-else-if="coverImage" :src="coverImage.src" :alt="coverImage.alt" class="absolute h-full w-full top-0 rounded-sm m-0 object-cover border border-neutral-200 dark:border-neutral-900 ">
      </div>

      <figcaption class="font-medium text-sm mt-3">
        <ProseH3 class="m-0 font-sans! text-lg">
          {{ props.title }}
        </ProseH3>
        <span v-if="pending">...</span>
        <span v-else-if="error">Fehler beim Laden des Albums</span>
        <span v-else>{{ images ? images.length : 0 }} Bilder</span>
      </figcaption>
    </figure>
  </NuxtLink>
</template>
