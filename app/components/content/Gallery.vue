<script setup lang="ts">
defineProps<{
  albums?: { path: string, title: string }[]
}>()

const route = useRoute()
const gallery = ref([] as {
  src: string
  alt: string | undefined
}[])

watchEffect(() => {
  gallery.value = useImages(route.query.album as string)
})

function selectAlbum(path: string, images: { src: string, alt: string | undefined }[]) {
  gallery.value.splice(0, gallery.value.length, ...images)
  navigateTo({ query: { album: path } })
}
</script>

<template>
  <UPage class="gap-8">
    <template #left>
      <UAside class="block -mt-8">
        <UPageColumns class="overflow-x-auto flex lg:flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
          <Album v-for="album in albums" :key="album.path" :path="album.path" :title="album.title" @select-album="selectAlbum" />
        </UPageColumns>
      </UAside>
    </template>

    <UPageColumns>
      <img v-for="img in gallery" :key="img.src" :src="img.src" :alt="img.alt" class="w-full m-0 rounded-md border border-gray-200 dark:border-gray-800">
    </UPageColumns>
  </UPage>
</template>
