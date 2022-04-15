export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chat',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
    'cookie-universal-nuxt',
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyCr4Dd0uwp3w-oSQljXuSK1N5iRz3O_uiI',
      authDomain: 'chat-5bd45.firebaseapp.com',
      databaseURL: 'https://chat-5bd45-default-rtdb.firebaseio.com',
      projectId: 'chat-5bd45',
      storageBucket: 'chat-5bd45.appspot.com',
      messagingSenderId: '867002699120',
      appId: '1:867002699120:web:609e5bc652641f69e093b5',
    },
    services: {
      auth: true,
      database: true,
    },
    auth: {
      initialize: {
        onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
