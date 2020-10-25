export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    script: [
      {
        src: '//webfonts.sakura.ne.jp/js/sakurav3.js',
        type: 'text/javascript',
      },
    ],
    title: 'ogawa-jimusho',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:description', property: 'og:description', content: '後楽園すぐ！岡山市の税理士事務所です' },
      { hid: 'description', name: 'description', content: '後楽園すぐ！岡山市の税理士事務所です' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/customize.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    '@nuxtjs/style-resources',
    ['nuxt-buefy', { css: false }],
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-KPWJF9J' }],
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.ogawa-jimusho.com',
    generate: true,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
