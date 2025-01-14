import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },
  content: {
    documentDriven: {
      layoutFallbacks: ['content'],
    },
  },
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  extends: [
    '@nuxt/ui-pro',
    // 'github:happydesigns/ui-base',
  ],
  image: {
    quality: 80,
    format: ['avif', 'webp', 'jpg'],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    // '@nuxthq/studio',
    '@nuxt/fonts',
    '@nuxtjs/seo',
  ],
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },
  // site: {
  //   url: 'https://siegel-steinmetz-de.pages.dev/',
  // },
  vite: {
    optimizeDeps: {
      include: [
        'fast-deep-equal',
      ],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-08-18',
})
