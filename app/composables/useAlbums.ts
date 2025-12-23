export function useAlbums() {
  return useAsyncData('albums-list', () => queryCollection('albums')
    .order('order', 'ASC')
    .select('title', 'slug', 'coverImage', 'images')
    .all(), {
    transform: albums => albums.map(album => ({
      title: album.title,
      slug: album.slug,
      coverImage: album.coverImage ?? album.images?.[0] ?? null,
      imageCount: album.images?.length ?? 0,
    })),
  })
}
