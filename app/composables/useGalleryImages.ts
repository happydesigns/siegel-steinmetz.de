interface GalleryImage {
  src: string
  alt: string
}

export function useGalleryImages(path?: string): GalleryImage[] {
  if (!path) {
    return []
  }

  // Vite's import.meta.glob for eager loading
  // IMPORTANT: The path for import.meta.glob must be a static string literal.
  // We cannot dynamically insert `${path}` directly into it.
  // So, we glob all potential images and then filter.
  // Updated glob pattern to be more inclusive of all file types.
  const galleryModules = import.meta.glob('~/assets/gallery/**/*.*', { eager: true }) as Record<string, { default: string }>

  const imageList = Object.entries(galleryModules)
    // Filter to include only images within the specified subfolder (path)
    .filter(([filePath, _]) => {
      const pathPrefix = `/assets/gallery/${path}/`
      return filePath.startsWith(pathPrefix)
    })
    .map(([_, imageModule]) => {
      const src = imageModule.default
      const filenameWithExtension = src.substring(src.lastIndexOf('/') + 1)
      const altText = filenameWithExtension.substring(0, filenameWithExtension.lastIndexOf('.'))

      return {
        src,
        alt: altText,
      }
    })

  return imageList
}
