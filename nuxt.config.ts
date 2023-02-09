export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
    'vuetify/lib/styles/main.sass',
    '~/styles/vars.css',
  ],
  // colorMode: {
  //   classSuffix: '',
  // },
  content: {
    documentDriven: true,
  },
  app: {
    head: {
      titleTemplate: '%s - Bernd Siegel Steingestaltung',
      link: [
        { rel: 'icon', type: 'image/png', href: '/nuxt.png' },
      ],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  routeRules: {
    '/**': { swr: true },
  },
})
