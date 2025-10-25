import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'github:happydesigns/ui',
  ],
  modules: [
    '@nuxtjs/seo',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://www.siegel-steinmetz.de',
    name: 'Bernd Siegel Steingestaltung',
  },
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },
  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },
  compatibilityDate: '2024-08-18',
  vite: {
    optimizeDeps: {
      include: [
        'fast-deep-equal',
      ],
    },
  },
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },
  image: {
    quality: 80,
    format: ['avif', 'webp', 'jpg'],
  },
})
