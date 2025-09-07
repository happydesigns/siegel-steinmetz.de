interface AlbumEntry {
  src: string
  alt?: string
  title?: string
}

interface GalleryConfig {
  sourceDir: string
  albums: Record<string, AlbumEntry[]>
}

export default defineEventHandler(async (event) => {
  const album = event.context.params?.album
  if (!album) {
    throw createError({ statusCode: 400, statusMessage: 'Album is required' })
  }

  const appCfg = useAppConfig() as { app?: { gallery?: Partial<GalleryConfig> } }
  const galleryConfig = appCfg.app?.gallery ?? {}
  const sourceDir = galleryConfig.sourceDir ?? '/assets/images/gallery'

  // Keep the array as-is (order is preserved here)
  const albumMetaArray = (galleryConfig.albums?.[album] ?? []) as AlbumEntry[]

  const storage = useStorage('assets:gallery')
  const imageKeys = await storage.getKeys(album)

  // Build a set for quick existence check
  const keySet = new Set(imageKeys.map(key => key.split(':', 2)[1]))

  return albumMetaArray
    .filter(item => keySet.has(item.src)) // only include if it exists in storage
    .map((item) => {
      const key = `${album}:${item.src}`
      const imagePath = key.replaceAll(':', '/')
      const src = sourceDir.endsWith('/')
        ? `${sourceDir}${imagePath}`
        : `${sourceDir}/${imagePath}`

      return {
        src,
        alt: item.alt ?? '',
        title: item.title ?? '',
      }
    })
})
