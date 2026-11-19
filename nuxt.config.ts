import { env } from 'node:process'
import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  extends: [
    '@happydesigns/ui/content',
  ],

  modules: [
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/eslint',
    '@nuxt/hints',
  ],

  $development: {
    image: { provider: 'ipx' },
  },

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

  // Resolve Content server queries from the UI layer through the app's Nitro runtime.
  alias: {
    '@nuxt/content/server': fileURLToPath(import.meta.resolve('@nuxt/content/server')),
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

  vite: {
    resolve: {
      dedupe: ['vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/reactivity', '@vue/shared', '@nuxt/content', '@nuxt/ui'],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['google.maps'],
      },
    },
  },

  hooks: {
    'build:manifest': (manifest) => {
      for (const chunk of Object.values(manifest)) {
        if (chunk.resourceType === 'script') {
          chunk.preload = false
        }
      }
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
        'lucide:check',
        'lucide:chevron-down',
        'lucide:external-link',
        'lucide:hash',
        'lucide:loader-circle',
        'lucide:locate-fixed',
        'lucide:log-in',
        'lucide:search',
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
    provider: 'ipxStatic',
    none: {},
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
      branch: env.STUDIO_GIT_BRANCH || 'main',
    },
    i18n: {
      defaultLocale: 'de',
    },
  },
})
