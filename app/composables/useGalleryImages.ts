export interface GalleryImage {
  src: string
  alt: string
  title?: string
}

export function useGalleryImages(albumPathInput: Ref<string> | string) {
  const path = computed(() => unref(albumPathInput))

  const requestUrl = computed(() => {
    if (!path.value || path.value.trim() === '') {
      return ''
    }
    return `/api/gallery/${path.value}`
  })

  return useFetch<GalleryImage[]>(requestUrl, {
    default: () => [],
    immediate: !!path.value,
  })
}
