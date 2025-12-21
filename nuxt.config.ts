import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    'github:happydesigns/ui#v0.5.1',
  ],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-studio',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'siegel-steinmetz.de',
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

  nitro: {
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      failOnError: false,
      routes: ['/', '/sitemap.xml'],
    },
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

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
