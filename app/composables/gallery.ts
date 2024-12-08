export function useImages(path?: string) {
  if (!path)
    return []

  const gallery = import.meta.glob('~/assets/gallery/**', { eager: true }) as Record<string, { default: string }>
  const imageList = Object.entries(gallery)
    .filter(([album, _]) => album.includes(`${path}`))
    .map(([_, image]) => {
      return {
        src: image.default,
        alt: image.default.split('/').pop()?.split('.')[0],
      }
    })
  return imageList
}
