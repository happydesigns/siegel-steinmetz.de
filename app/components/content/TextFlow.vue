<script setup lang="ts">
export interface Props {
  side?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  side: 'left',
})
</script>

<template>
  <div class="md:overflow-x-auto py-4 sm:py-6 lg:py-8" :class="props.side">
    <slot />
  </div>
</template>

<style>
.left > figure {
  @apply md:float-left md:mr-8 lg:mr-16 my-6;
}

.right > figure {
  @apply md:float-right md:ml-8 lg:ml-16 my-6;
}

.left > figure > img,
.right > figure > img {
  @apply min-w-full;
}
</style>
