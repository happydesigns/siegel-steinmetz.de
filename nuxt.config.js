import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  render: {
    static: {
      maxAge: 60 * 60 * 24 * 30,
    },
  },

  router: {
    base: '/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Bernd Siegel Steingestaltung',
    title: 'Bernd Siegel Steingestaltung',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Steingestaltung in Neudenau: Grabmale, Restaurierungen und mehr.' },
      { hid: 'keywords', name: 'keywords', content: 'Grabmale, Restaurierungen, Grab, Neudenau, Heilbronn, Siegel, Steingestaltung' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'i5hJWTD7u44mb8sXv4PjgwP5EoPz0sWVuHd4rhbV6vk' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { defer: true, body: true, src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "1c674d7433ee479cbb8a157ad9028dfb"}' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['@nuxt/image', {
      provider: 'static',
      dir: "assets/img",
    }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.siegel-steinmetz.de/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    devtools: true,
    routes: ['/galerie/grabmallager', '/galerie/grabmalreferenzen', 'galerie/restaurierungen'],
    ignore: ['grabmalreferenzen', 'grabmallager']
  },

  image: {
    staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  }
}
