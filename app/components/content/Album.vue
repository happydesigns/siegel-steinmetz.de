<script setup lang="ts">
export interface Props {
  path?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  path: '',
  title: '',
})

const route = useRoute()

const { data: album, pending, error } = await useAlbum(props.path)

const imageCount = computed(() => album.value?.images.length ?? 0)
const coverImage = computed(() => album.value?.coverImage ?? album.value?.images?.[0] ?? null)

const variant = 'naked'
</script>

<template>
  <NuxtLink :to="{ path: `/galerie/${props.path}`, replace: true }">
    <UPageCard
      :title="props.title"
      :description="`${imageCount} Bilder`"
      :variant="variant"
      reverse
      :ui="{ container: 'p-0 sm:p-0 gap-0', wrapper: 'py-4 rounded-sm order-last' }"
      class="h-full"
    >
      <AlbumEffect :backgrounds="3" :rounded="true" :ui="{ layer: 'rounded-t-sm' }" class="lg:min-w-0 mx-1">
        <USkeleton
          v-if="pending"
          class="h-full w-full rounded-sm m-0 bg-neutral-200 dark:bg-neutral-700 border border-default flex items-center justify-center"
        />
        <img
          v-else-if="coverImage"
          :src="coverImage.src"
          :alt="coverImage.alt"
          class="h-60 lg:h-full w-full rounded-sm m-0 object-cover border border-default"
          :class="{ 'outline-2 outline-border': route.path === `/galerie/${props.path}` }"
        >
        <span v-else-if="error" class="inset-0 flex items-center justify-center text-red-600 bg-white/80 rounded-sm border border-default">Fehler beim Laden des Albums</span>
      </AlbumEffect>
    </UPageCard>
  </NuxtLink>
</template>
