<script setup lang="ts">
defineProps({
  albums: {
    type: Array as PropType<{ path: string, title: string }[]>,
    required: true,
  },
})
</script>

<template>
  <UPage>
    <template #left>
      <UPageColumns class="overflow-x-auto flex lg:flex-col gap-4 w-full">
        <Album v-for="album in albums" :key="album.path" :path="album.path" :title="album.title" />
      </UPageColumns>
    </template>
  </UPage>
</template>
