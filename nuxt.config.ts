// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    documentDriven: true,
  },
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  image: {
    // TODO: temporary workaround, see https://github.com/nuxt/image/issues/999
    provider: 'netlify',
    netlify: {
      baseURL: 'https://siegel-steinmetz.netlify.app',
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/plausible',
    'nuxt-og-image',
  ],
  ui: {
    icons: ['ph'],
  },
})
