<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
  imageCount?: number
  coverImage?: { src: string, alt?: string } | null
  selected?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
  imageCount: 0,
  coverImage: null,
})
</script>

<template>
  <NuxtLink
    :to="props.path" prefetch-on="interaction" :aria-current="selected ? 'true' : undefined"
    class="group block rounded-sm focus-visible:outline-2 focus-visible:outline-primary"
  >
    <UPageCard
      :title="props.title"
      :description="`${props.imageCount} ${props.imageCount === 1 ? 'Bild' : 'Bilder'}`"
      variant="naked"
      reverse
      :ui="{
        container: 'p-1 sm:p-1 flex-row items-center gap-3 lg:grid lg:p-0 lg:gap-0',
        wrapper: 'order-last lg:py-4',
        title: selected ? 'text-primary' : 'group-hover:text-primary',
        description: 'mt-0 lg:mt-1',
      }"
      class="h-full"
    >
      <AlbumEffect
        :backgrounds="3" :ui="{ layer: 'hidden lg:block rounded-t-sm' }"
        class="max-lg:size-12 max-lg:min-w-0 max-lg:shrink-0 lg:mx-1"
      >
        <SitePhoto
          v-if="props.coverImage"
          :src="props.coverImage.src"
          :alt="props.coverImage.alt"
          class="h-12 lg:h-full w-full rounded-sm m-0 object-cover border border-default"
          :class="{ 'outline-2 outline-primary': selected }"
        />
        <div v-else class="h-12 lg:h-full w-full rounded-sm m-0 bg-muted border border-default flex items-center justify-center">
          <UIcon name="i-ph-image-duotone" class="w-8 h-8 text-neutral-400" />
        </div>
      </AlbumEffect>
    </UPageCard>
  </NuxtLink>
</template>
