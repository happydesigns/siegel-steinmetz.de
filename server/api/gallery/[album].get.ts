export default defineEventHandler(async (event) => {
  const album = event.context.params?.album
  if (!album) {
    throw createError({ statusCode: 400, statusMessage: 'Album is required' })
  }

  const galleryConfig = (useAppConfig().app.gallery || {})
  const albumMeta = ((galleryConfig.albums || {}) as Record<string, Record<string, { alt?: string, title?: string }>>)[album] || {}

  const storage = useStorage('assets:gallery')
  const imageKeys = await storage.getKeys(album)

  return imageKeys.map((key) => {
    // key is like "my-album:foo.jpg"
    const fileName = key.slice(album.length + 1) // -> "foo.jpg"
    const alt = albumMeta[fileName]?.alt || ''
    const title = albumMeta[fileName]?.title || ''

    const baseDir = galleryConfig.sourceDir
    const imagePath = key.replaceAll(':', '/') // Converts "my-album:foo.jpg" to "my-album/foo.jpg"

    const src = baseDir.endsWith('/')
      ? `${baseDir}${imagePath}`
      : `${baseDir}/${imagePath}`

    return {
      src,
      alt,
      title,
    }
  })
})
