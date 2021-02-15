export default {
  generate: {
    fallback: true,
  },
  target: 'server', // Default is 'server'. Can be 'server' or 'static'
  // Environment variables (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env)
  env: {
    graphqlUrl: process.env.GRAPHQL_URL || 'http://localhost:3000/graphql',
    placeholderSmallImage: process.env.PLACEHOLDER_SMALL_IMAGE_URL || '',
    AlgoliaApplicationId: process.env.ALGOLIA_APPLICATION_ID || '',
    AlgoliaSearchOnlyAPIKey: process.env.ALGOLIA_SEARCH_ONLY_API_KEY || '',
    AlgoliaIndexName: process.env.ALGOLIA_INDEX_NAME || '',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NuxtJS WooCommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/animate.min.css', 'swiper/swiper-bundle.min.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-formulate',
    { src: '~/plugins/vue-awesome-swiper', mode: 'client', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  /* components: [
    '~/components/Cart',
    '~/components/Category',
    '~/components/Checkout',
    '~/components/Footer',
    '~/components/Header',
    '~/components/Index',
    '~/components/Products',
    '~/components/Spinner',
  ], */

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/apollo'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  apollo: {
    clientConfigs: {
      default: '@/plugins/apollo-client-config.js',
    },
  },
}
