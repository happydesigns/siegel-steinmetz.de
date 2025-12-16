export function useAlbums() {
  return useAsyncData('albums-list', () => queryCollection('albums')
    .order('order', 'ASC')
    .select('title', 'path', 'coverImage')
    .all(),
  {
    transform: albums => albums.map(album => ({
      title: album.title,
      path: album.path,
      coverImage: album.coverImage ?? null,
      imageCount: 0,
    })),
  })
}
