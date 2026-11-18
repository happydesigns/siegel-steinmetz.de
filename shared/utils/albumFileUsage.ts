export function isAlbumFile(src: string, folder: string) {
  const prefix = `/${folder}/`
  return /^assets\/gallery\/(?:[\w-]+\/)*[\w-]+$/.test(folder) && src.startsWith(prefix)
    && /^[\w-][\w.-]*\.(?:jpe?g|png|webp|avif)$/i.test(src.slice(prefix.length))
}

export function usesAlbumFile(text: string, src: string) {
  const path = src.toLowerCase()
  // Absolute site paths identify a file uniquely. For relative links, err on
  // the side of keeping a file when its basename occurs in the content.
  const normalized = text.toLowerCase().replace(/%([0-9a-f]{2})/g, (_, hex: string) => String.fromCharCode(Number.parseInt(hex, 16)))
  if (normalized.includes(path.slice(1))) {
    return true
  }
  const withoutAssetPaths = normalized.replace(/\/?assets\/[\w./-]+/g, candidate =>
    candidate.includes('/.') || candidate.includes('//') ? candidate : '')
  return withoutAssetPaths.includes(path.slice(path.lastIndexOf('/') + 1))
}
