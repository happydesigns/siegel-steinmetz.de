<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
  imageCount?: number
  coverImage?: { src: string, alt?: string } | null
  coverAspectRatio?: number
  selected?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
  imageCount: 0,
  coverImage: null,
})

const coverRatio = computed(() => {
  const ratio = props.coverAspectRatio
  return ratio !== undefined && Number.isFinite(ratio) && ratio > 0 ? ratio : undefined
})
</script>

<template>
  <NuxtLink
    :to="props.path" prefetch-on="interaction" :aria-current="selected ? 'true' : undefined"
    class="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
  >
    <UPageCard
      :description="`${props.imageCount} ${props.imageCount === 1 ? 'Bild' : 'Bilder'}`"
      variant="naked"
      reverse
      :ui="{
        container: 'grid grid-cols-[minmax(0,1fr)] content-start items-start gap-0 p-0 sm:p-0',
        wrapper: 'order-last pt-2',
        title: 'flex items-center gap-1',
        description: 'mt-1',
      }"
      class="h-full"
    >
      <template #title>
        {{ props.title }}
        <UIcon
          name="i-lucide-arrow-right" aria-hidden="true"
          class="size-3.5 align-middle opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </template>

      <AlbumEffect
        :backgrounds="3"
        :ui="{
          layer: 'rounded-t-sm',
          content: `${coverRatio || !props.coverImage ? 'album-cover-frame' : ''} rounded-sm outline-2 outline-offset-1 ${selected
            ? 'outline-neutral-600 dark:outline-neutral-400'
            : 'outline-transparent group-hover:outline-neutral-600/40 dark:group-hover:outline-neutral-400/40 motion-safe:transition-[outline-color] motion-safe:duration-[120ms] forced-colors:outline-none forced-colors:group-hover:outline-solid'}`,
        }"
        :style="{ '--album-cover-ratio': coverRatio }"
      >
        <SitePhoto
          v-if="props.coverImage"
          :src="props.coverImage.src"
          :alt="props.coverImage.alt"
          sizes="160px sm:192px"
          gallery-thumbnail
          class="block w-full max-lg:aspect-square rounded-sm m-0 object-cover border border-default"
        />
        <div v-else class="w-full rounded-sm m-0 bg-muted border border-default flex items-center justify-center">
          <UIcon name="i-ph-image-duotone" class="w-8 h-8 text-neutral-400" />
        </div>
      </AlbumEffect>
    </UPageCard>
  </NuxtLink>
</template>

<style scoped>
:deep(.album-cover-frame) {
  position: relative;
  aspect-ratio: 1;
}

@media (width >= 64rem) {
  :deep(.album-cover-frame) {
    aspect-ratio: var(--album-cover-ratio, 1);
  }
}

:deep(.album-cover-frame > *) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
