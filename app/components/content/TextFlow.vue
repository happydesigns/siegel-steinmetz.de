<script setup lang="ts">
export interface Props {
  side?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  side: 'left',
})
</script>

<template>
  <div class="md:overflow-x-auto py-4 sm:py-6 lg:py-8 group" :class="props.side">
    <slot />
  </div>
</template>
