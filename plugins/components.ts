import { UContainer, UPage, UPageColumns } from '#components'

// Add them to main entry (useful for content usage)
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Container', UContainer)
  nuxtApp.vueApp.component('Page', UPage)
  nuxtApp.vueApp.component('PageColumns', UPageColumns)
})
