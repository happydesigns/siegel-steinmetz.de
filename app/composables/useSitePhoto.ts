import dimensions from '#build/photo-dimensions.json'

const sizes: Record<string, number[]> = dimensions

export function getSitePhotoDimensions(src: string) {
  const [width, height] = sizes[src] ?? []
  return width && height ? [width, height] as const : undefined
}

export function useSitePhoto(src: () => string | undefined) {
  const failedSource = ref<string>()
  const photo = computed(() => {
    const path = src()
    const size = path && getSitePhotoDimensions(path)
    return size
      ? { width: size[0], height: size[1], provider: path === failedSource.value ? 'none' as const : undefined, format: 'webp' }
      : { provider: 'none' as const }
  })
  // Studio drafts can reference a size that was never rendered in the last build.
  function useOriginal() {
    failedSource.value = src()
  }
  return { photo, useOriginal }
}
