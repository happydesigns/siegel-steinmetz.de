export interface AlbumSummary {
  title: string
  path: string
  coverImage: { src: string, alt?: string } | null
  imageCount: number
}

export function useAlbums() {
  return useAsyncData('albums-list', () => queryCollection('albums')
    .order('order', 'ASC')
    .select('title', 'path', 'coverImage', 'images')
    .all(), {
    transform: albums => albums.map((album): AlbumSummary => {
      const images = album.images ?? []
      const coverImage = album.coverImage ?? images[0] ?? null
      return {
        title: album.title,
        path: album.path,
        coverImage,
        imageCount: images.length,
      }
    }),
  })
}
