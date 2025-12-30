export function useAlbums() {
  return useAsyncData('albums-list', () => queryCollection('albums')
    .order('order', 'ASC')
    .select('title', 'path', 'coverImage', 'images')
    .all(), {
    transform: albums => albums.map(album => ({
      title: album.title,
      path: album.path,
      coverImage: album.coverImage ?? album.images?.[0] ?? null,
      imageCount: album.images?.length ?? 0,
    })),
  })
}
