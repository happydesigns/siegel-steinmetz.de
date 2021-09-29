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
    base: '/siegel-steinmetz'
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
      { hid: 'description', name: 'description', content: 'Sie finden unsere Firma Bernd Siegel Steingestaltung in Neudenau.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDIfUVcub6RqXsutLIVam2Q9mEP3BML_KA" }
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
    // '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.siegel-steinmetz.de'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
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
