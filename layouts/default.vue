<template>
  <div>
    <!-- https://emoji-css.afeld.me/ で絵文字を設定 -->
    <Navbar />
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<style>
body,
p,
textarea,
button {
  font-family: 'IBM Plex Sans', a-otf-ud-shin-go-pr6n, sans-serif !important;
}
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
  font-family: 'IBM Plex Sans', fot-udkakugo-large-pr6n, sans-serif !important;
}
</style>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      items: [
        {
          title: 'ホーム',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'アクセス',
          icon: 'map',
          to: { name: 'access' },
        },
      ],
    }
  },
}
</script>
