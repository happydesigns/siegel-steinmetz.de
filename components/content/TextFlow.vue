<script setup lang="ts">
export interface Props {
  side?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  side: 'left',
})
</script>

<template>
  <div class="md:overflow-auto my-4 sm:my-6 lg:my-8" :class="props.side">
    <slot />
  </div>
</template>

<style>
.left > figure {
  @apply md:float-left lg:mr-16 md:mr-8 md:my-5;
}

.right > figure {
  @apply md:float-right lg:ml-16 md:ml-8 md:my-5;
}

.left > figure > img,
.right > figure > img {
  @apply min-w-full;
}
</style>
