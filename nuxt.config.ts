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
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  extends: ['@nuxt/ui-pro'],
  hub: {
    blob: true,
  },
  image: {
    quality: 80,
    format: ['avif', 'webp', 'jpg'],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxthub/core',
    '@nuxtjs/fontaine',
    // 'nuxt-og-image',
  ],
  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true,
    },
  },
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
  compatibilityDate: '2024-08-18',
})
