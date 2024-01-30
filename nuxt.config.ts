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
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/plausible',
    'nuxt-og-image',
  ],
  routeRules: {
    '/': { prerender: true },
    'ueber-uns': { prerender: true },
    'restaurierungen': { prerender: true },
    'grabmale': { prerender: true },
    'galerie': { prerender: true },
    'kontakt': { prerender: true },
    'impressum': { prerender: true },
    'datenschutz': { prerender: true },
  },
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
