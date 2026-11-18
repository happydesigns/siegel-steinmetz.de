<script setup lang="ts">
import type { AlbumSummary } from '~/composables/useAlbums'

defineProps<{ albums: AlbumSummary[] }>()
</script>

<template>
  <UPageGrid as="ul" class="list-none p-0">
    <li v-for="(album, index) in albums" :key="album.path" class="min-w-0">
      <NuxtLink
        :to="album.path" prefetch-on="interaction"
        class="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <div
          class="grid aspect-4/3 grid-rows-2 gap-1 overflow-hidden rounded-sm bg-muted"
          :class="album.previewSources.length > 1 && 'grid-cols-[2fr_1fr]'"
        >
          <SitePhoto
            v-for="(src, position) in album.previewSources" :key="src"
            :src alt=""
            :sizes="position === 0 ? '384px sm:320px' : '160px'"
            :loading="index === 0 && position === 0 ? 'eager' : 'lazy'"
            class="size-full min-h-0 min-w-0 object-cover"
            :class="(position === 0 || album.previewSources.length === 2) && 'row-span-2'"
          />
          <UIcon v-if="!album.previewSources.length" name="i-ph-images-duotone" class="row-span-2 size-10 place-self-center text-muted" />
        </div>
        <div class="mt-3 flex items-center justify-between gap-3">
          <h2 class="font-serif text-2xl text-highlighted group-hover:text-primary">
            {{ album.title }}
          </h2>
          <UIcon name="i-ph-arrow-right" class="size-5 shrink-0 text-muted group-hover:text-primary" />
        </div>
        <p class="mt-1 text-sm text-muted">
          {{ album.imageCount }} {{ album.imageCount === 1 ? 'Bild' : 'Bilder' }}
        </p>
      </NuxtLink>
    </li>
  </UPageGrid>
</template>
