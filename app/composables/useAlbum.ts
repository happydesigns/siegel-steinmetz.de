export function useAlbum(path: MaybeRefOrGetter<string>) {
  const pathRef = toRef(path)
  const key = computed(() => `albums:${pathRef.value}`)

  return useAsyncData(key, () =>
    queryCollection('albums')
      .path(pathRef.value)
      .first())
}
