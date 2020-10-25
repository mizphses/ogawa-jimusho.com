<template>
  <div>
    <!-- https://emoji-css.afeld.me/ で絵文字を設定 -->
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<style>
b,
h1,
h2,
h3,
h4,
h5,
h6,
strong,
.bold,
.has-text-weight-bold {
  font-family: 'IBM Plex Sans', fot-udkakugo-large-pr6n, sans-serif;
}
html {
  font-feature-settings: 'palt';
}
</style>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'ja',
      },
    }
  },
}
</script>
