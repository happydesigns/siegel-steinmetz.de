<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
  imageCount?: number
  coverImage?: { src: string, alt?: string } | null
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
  imageCount: 0,
  coverImage: null,
})

const route = useRoute()
const variant = 'naked'
</script>

<template>
  <NuxtLink :to="{ path: `/galerie/${props.path}`, replace: true }">
    <UPageCard
      :title="props.title"
      :description="props.imageCount > 0 ? `${props.imageCount} Bilder` : undefined"
      :variant="variant"
      reverse
      :ui="{ container: 'p-0 sm:p-0 gap-0', wrapper: 'py-4 rounded-sm order-last' }"
      class="h-full"
    >
      <AlbumEffect :backgrounds="3" :rounded="true" :ui="{ layer: 'rounded-t-sm' }" class="lg:min-w-0 mx-1">
        <img
          v-if="props.coverImage"
          :src="props.coverImage.src"
          :alt="props.coverImage.alt"
          class="h-60 lg:h-full w-full rounded-sm m-0 object-cover border border-default"
          :class="{ 'outline-2 outline-border': route.path === `/galerie/${props.path}` }"
        >
        <div v-else class="h-60 lg:h-full w-full rounded-sm m-0 bg-neutral-100 dark:bg-neutral-800 border border-default flex items-center justify-center">
          <UIcon name="ph-image-duotone" class="w-8 h-8 text-neutral-400" />
        </div>
      </AlbumEffect>
    </UPageCard>
  </NuxtLink>
</template>
