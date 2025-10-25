export function useAlbums() {
  return useAsyncData('albums', () => queryCollection('albums').order('order', 'ASC').all())
}
