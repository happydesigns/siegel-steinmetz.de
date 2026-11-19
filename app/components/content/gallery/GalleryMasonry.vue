<script setup lang="ts">
const props = defineProps<{
  images: { src: string, alt?: string }[]
}>()

// At equal column widths, each photo's height is proportional to its aspect ratio.
// Keep the same column starts in the server HTML and in the responsive CSS layout.
const columnStarts = computed(() => {
  const heights = props.images.map(({ src }) => {
    const size = getSitePhotoDimensions(src)
    return size ? size[1] / size[0] : 1
  })
  let height = 0
  const offsets = heights.map((itemHeight) => {
    const top = height
    height += itemHeight
    return top
  })
  function startsFor(count: number) {
    const starts = new Set<number>()
    const columns = Math.min(count, offsets.length)
    let next = 1
    for (let column = 1; column < columns; column++) {
      const target = height * column / columns
      const last = offsets.length - (columns - column)
      while (next < last && Math.abs(offsets[next + 1]! - target) < Math.abs(offsets[next]! - target)) {
        next++
      }
      starts.add(next++)
    }
    return starts
  }
  const two = startsFor(2)
  const three = startsFor(3)
  // At most two high-priority requests: the largest first-row photo for each layout.
  function tallest(starts: Set<number>) {
    return [...starts].reduce((best, index) => heights[index]! > heights[best]! ? index : best, 0)
  }
  return { two, three, priority: new Set([tallest(two), tallest(three)]) }
})
</script>

<template>
  <UPageColumns class="gallery-photos gap-3 space-y-3 sm:gap-4 sm:space-y-4">
    <SitePhoto
      v-for="(img, index) in images"
      :key="img.src"
      :src="img.src"
      :alt="img.alt"
      sizes="320px 364:192px 440:256px 560:320px 672:256px 848:320px"
      gallery-thumbnail
      class="block w-full h-auto rounded-sm border border-default"
      :class="{ 'start-two': columnStarts.two.has(index), 'start-three': columnStarts.three.has(index) }"
      :loading="index === 0 || columnStarts.two.has(index) || columnStarts.three.has(index) ? 'eager' : 'lazy'"
      :fetchpriority="columnStarts.priority.has(index) ? 'high' : undefined"
    />
  </UPageColumns>
</template>

<style scoped>
.gallery-photos {
  columns: 1;
}

@container (21rem <= width < 39rem) {
  .gallery-photos {
    column-count: 2;
  }

  .start-two {
    break-before: column;
  }
}

@container (min-width: 39rem) {
  .gallery-photos {
    column-count: 3;
  }

  .start-three {
    break-before: column;
  }
}
</style>
