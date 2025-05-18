export function usePageContent() {
  const route = useRoute()
  const key = computed(() => route.path)
  const handler = () => queryCollection('content').path(route.path).first()
  return useAsyncData(key, handler)
}
