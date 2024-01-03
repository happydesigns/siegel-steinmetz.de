import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },
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
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },
  ui: {
    icons: ['ph'],
  },
  vite: {
    optimizeDeps: {
      include: [
        'fast-deep-equal',
      ],
    },
  },
})
