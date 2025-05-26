export function usePageContent(path?: string) {
  const route = useRoute()
  const key = path || route.path
  const handler = () => queryCollection('content').path(key).first()
  return useAsyncData(key, handler, { watch: [() => key] })
}
