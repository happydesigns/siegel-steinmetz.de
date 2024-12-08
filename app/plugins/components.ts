import { UContainer, ULandingCard, ULandingHero, ULandingSection, UPage } from '#components'

// Add them to main entry (useful for content usage)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Container', UContainer)
  nuxtApp.vueApp.component('LandingCard', ULandingCard)
  nuxtApp.vueApp.component('LandingHero', ULandingHero)
  nuxtApp.vueApp.component('LandingSection', ULandingSection)
  nuxtApp.vueApp.component('Page', UPage)
})
