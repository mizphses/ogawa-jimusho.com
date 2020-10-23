<template>
  <div>
    <!-- https://emoji-css.afeld.me/ で絵文字を設定 -->
    <Navbar />
    <nuxt />
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
.bold,
.has-text-weight-bold,
strong {
  font-family: 'IBM Plex Sans', fot-udkakugo-large-pr6n, sans-serif;
}
</style>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>
