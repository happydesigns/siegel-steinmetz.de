export function useAlbum(slug: MaybeRefOrGetter<string>) {
  const slugRef = toRef(slug)

  return useAsyncData(`albums:${slugRef.value}`, () =>
    queryCollection('albums')
      .where('slug', '=', slugRef.value)
      .first())
}
