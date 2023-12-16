<script setup lang="ts">
export interface Props  {
  side?: 'left' | 'right'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'left',
  class: '',
})
</script>

<template>
  <div class="md:overflow-auto" :class="`${props.side} ${props.class}`">
    <slot />
  </div>
</template>

<style>
.left > figure {
  @apply md:float-left md:mr-6 my-5;
}

.right > figure {
  @apply md:float-right md:ml-6 my-5;
}

.left > figure > img, .right > figure > img {
  @apply min-w-full;
}
</style>
