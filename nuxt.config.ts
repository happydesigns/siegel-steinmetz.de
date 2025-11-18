import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'github:happydesigns/ui#v0.4.1',
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
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },
  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },
  experimental: {
    extractAsyncDataHandlers: true,
  },
  compatibilityDate: '2025-10-30',
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
