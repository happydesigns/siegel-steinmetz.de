<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  caption?: string
  imgClass?: string
}>()
</script>

<template>
  <figure class="my-6 md:group-[.left]:float-left md:group-[.left]:mr-8 lg:group-[.left]:mr-16 md:group-[.right]:float-right md:group-[.right]:ml-8 lg:group-[.right]:ml-16">
    <slot name="image">
      <NuxtImg
        placeholder :src :alt :class="imgClass"
        class="mb-1 border border-neutral-200 dark:border-neutral-800 w-96 rounded lg:w-[28rem] group-left:min-w-full group-right:min-w-full"
      />
    </slot>

    <figcaption class="text-center">
      <slot name="caption">
        {{ caption }}
      </slot>
    </figcaption>
  </figure>
</template>
