<script setup lang="ts">
const props = withDefaults(defineProps<{
  ui?: {
    wrapper?: string
    layer?: string | ((i: number, n: number) => string)
    content?: string
  }
  backgrounds?: number
  rounded?: boolean
}>(), {
  backgrounds: 2,
  rounded: true,
})

const backgrounds = computed(() => props.backgrounds)

function getLayerStyle(i: number, n: number) {
  // For 2 backgrounds, use a visually balanced stepped margin
  if (n === 2) {
    const margin = i === 1 ? 18 : 12 // first (bottom) = 18, second (top) = 12
    return {
      marginLeft: `${margin}px`,
      marginRight: `${margin}px`,
      opacity: i / n,
    }
  }
  // For n > 2, use dynamic margins
  const minMargin = 4
  const maxMargin = 32
  const t = (n - i) / (n - 1 || 1)
  const margin = minMargin + t * (maxMargin - minMargin)
  const opacity = i / n
  return {
    marginLeft: `${margin}px`,
    marginRight: `${margin}px`,
    opacity,
  }
}

function getLayerClass(i: number, n: number) {
  if (typeof props.ui?.layer === 'function') {
    return props.ui.layer(i, n)
  }
  if (typeof props.ui?.layer === 'string') {
    return props.ui.layer
  }
  return ''
}
</script>

<template>
  <div class="aspect-square min-w-[12rem] lg:min-w-0 flex flex-col items-stretch" :class="props.ui?.wrapper">
    <template v-for="i in backgrounds" :key="i">
      <div
        class="self-stretch h-1 bg-neutral-400 border-[0.5px] border-default pointer-events-none"
        :class="[getLayerClass(i, backgrounds), props.rounded ? 'rounded-t-sm' : '']"
        :style="getLayerStyle(i, backgrounds)"
      />
    </template>
    <div class="flex-1 w-full z-10" :class="props.ui?.content">
      <slot />
    </div>
  </div>
</template>
