import { UContainer, ULandingHero, UPage, UPageColumns } from '#components'

// Add them to main entry (useful for content usage)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Container', UContainer)
  nuxtApp.vueApp.component('LandingHero', ULandingHero)
  nuxtApp.vueApp.component('Page', UPage)
  nuxtApp.vueApp.component('PageColumns', UPageColumns)
})
