import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
  extends: [
    'github:happydesigns/ui-base',
  ],
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },
  image: {
    quality: 80,
    format: ['avif', 'webp', 'jpg'],
  },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
  ],
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },
  site: {
    url: 'https://www.siegel-steinmetz.de',
    name: 'Bernd Siegel Steingestaltung',
  },
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
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/api/gallery/grabmallager',
        '/api/gallery/grabmalreferenzen',
        '/api/gallery/restaurierungen',
        '/galerie/grabmallager',
        '/galerie/grabmalreferenzen',
        '/galerie/restaurierungen',
      ],
    },
    serverAssets: [
      {
        baseName: 'gallery',
        dir: 'public/assets/images/gallery',
      },
    ],
  },
})
