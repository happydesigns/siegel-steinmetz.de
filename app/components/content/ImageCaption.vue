<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  caption?: string
  imgClass?: string
}>()
</script>

<template>
  <figure>
    <slot name="image">
      <NuxtImg
        placeholder
        :src="src"
        :alt="alt"
        class="mb-1 border border-gray-200 dark:border-gray-800 w-96 lg:w-[28rem] default"
        :class="imgClass"
      />
    </slot>

    <!-- Slot for customizable caption, defaults to the caption prop -->
    <figcaption class="text-center">
      <slot name="caption">
        {{ caption }}
      </slot>
    </figcaption>
  </figure>
</template>
