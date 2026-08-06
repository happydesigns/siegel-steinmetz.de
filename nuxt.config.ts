// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    '@happydesigns/ui',
  ],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'siegel-steinmetz.de',
    defaultLocale: 'de',
  },

  runtimeConfig: {
    public: {
      googleMapsMapId: '',
    },
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
      wrangler: {
        // @ts-expect-error Wrangler 4.110 supports required secrets; Nitro's config type has not caught up yet.
        secrets: {
          required: [
            'NUXT_SCRIPTS_PROXY_SECRET',
            'STUDIO_GITHUB_CLIENT_ID',
            'STUDIO_GITHUB_CLIENT_SECRET',
          ],
        },
      },
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['google.maps'],
      },
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
        'lucide:external-link',
        'lucide:hash',
        'lucide:loader-circle',
        'lucide:locate-fixed',
        'lucide:log-in',
        'ph:arrow-right',
        'ph:bank-duotone',
        'ph:cross-duotone',
        'ph:envelope-fill',
        'ph:hammer-duotone',
        'ph:image-duotone',
        'ph:images-duotone',
        'ph:map-pin-duotone',
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

  scripts: {
    registry: {
      googleMaps: {},
    },
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
