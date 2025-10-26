export function useAlbum(path: MaybeRefOrGetter<string>) {
  const pathRef = toRef(path)

  return useAsyncData(`albums:${pathRef.value}`, () =>
    queryCollection('albums')
      .path(`${pathRef.value}`)
      .first())
}
