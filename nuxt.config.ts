import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    '@happydesigns/ui',
  ],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'siegel-steinmetz.de',
    defaultLocale: 'de',
  },

  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },

  build: {
    transpile: ['vue-google-maps-community-fork', '@googlemaps/markercluster'],
  },

  experimental: {
    extractAsyncDataHandlers: true,
  },

  compatibilityDate: '2026-07-09',

  nitro: {
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      failOnError: true,
      routes: ['/', '/sitemap.xml'],
    },
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },

  icon: {
    clientBundle: {
      icons: [
        'lucide:chevron-down',
        'lucide:hash',
        'lucide:log-in',
        'ph:arrow-right',
        'ph:bank-duotone',
        'ph:cross-duotone',
        'ph:envelope-fill',
        'ph:hammer-duotone',
        'ph:image-duotone',
        'ph:images-duotone',
        'ph:phone-duotone',
        'ph:phone-fill',
        'ph:printer-fill',
        'ph:users-duotone',
        'ph:warning-octagon-duotone',
      ],
    },
    serverBundle: {
      collections: ['lucide', 'ph'],
    },
  },

  image: {
    quality: 80,
    format: ['avif', 'webp', 'jpg'],
  },

  ogImage: {
    enabled: false,
  },

  sitemap: {
    zeroRuntime: true,
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'happydesigns',
      repo: 'siegel-steinmetz.de',
      branch: 'main',
    },
    i18n: {
      defaultLocale: 'de',
    },
  },
})
