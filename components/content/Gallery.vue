<script setup lang="ts">
defineProps<{
  albums?: { path: string, title: string }[]
}>()

const gallery = reactive(useImages(useRoute().query.album as string))

function selectAlbum(path: string, images: { src: string, alt: string | undefined }[]) {
  gallery.splice(0, gallery.length, ...images)
  navigateTo({ query: { album: path } })
}
</script>

<template>
  <UPage class="gap-8">
    <template #left>
      <UAside class="block -mt-8">
        <UPageColumns class="overflow-x-auto flex lg:flex-col gap-8 w-full">
          <Album v-for="album in albums" :key="album.path" :path="album.path" :title="album.title" @select-album="selectAlbum" />
        </UPageColumns>
      </UAside>
    </template>

    <UPageColumns>
      <img v-for="img in gallery" :key="img.src" :src="img.src" :alt="img.alt" class="w-full m-0 rounded-lg border border-gray-200 dark:border-gray-800">
    </UPageColumns>
  </UPage>
</template>
