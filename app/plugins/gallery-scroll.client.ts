export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  nuxtApp.hook('app:mounted', () => {
    const defaultScroll = router.options.scrollBehavior
    router.options.scrollBehavior = function (to, from, savedPosition) {
      if (from.meta.key === 'galerie' && to.name === from.name && !from.hash && !to.hash) {
        return savedPosition ?? false
      }

      return defaultScroll?.call(this, to, from, savedPosition)
    }
  })
})
