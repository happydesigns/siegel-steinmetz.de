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
        container: 'p-1 sm:p-1 flex-row items-center gap-3 lg:grid lg:p-0 lg:gap-0',
        wrapper: 'order-last lg:pt-2',
        description: 'mt-0 lg:mt-1',
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
          layer: 'hidden lg:block rounded-t-sm',
          content: selected ? 'rounded-sm outline-2 outline-offset-1 outline-neutral-600 dark:outline-neutral-400' : '',
        }"
        class="max-lg:w-12 max-lg:shrink-0"
        :style="{ '--album-cover-ratio': coverRatio }"
      >
        <SitePhoto
          v-if="props.coverImage"
          :src="props.coverImage.src"
          :alt="props.coverImage.alt"
          class="block w-full max-lg:h-12 rounded-sm m-0 object-cover border border-default group-hover:border-neutral-400 dark:group-hover:border-neutral-500"
          :class="{ 'lg:aspect-(--album-cover-ratio)': coverRatio }"
        />
        <div v-else class="max-lg:h-12 lg:aspect-[var(--album-cover-ratio,1)] w-full rounded-sm m-0 bg-muted border border-default group-hover:border-neutral-400 dark:group-hover:border-neutral-500 flex items-center justify-center">
          <UIcon name="i-ph-image-duotone" class="w-8 h-8 text-neutral-400" />
        </div>
      </AlbumEffect>
    </UPageCard>
  </NuxtLink>
</template>
