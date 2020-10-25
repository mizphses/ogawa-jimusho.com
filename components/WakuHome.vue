<template>
  <div>
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch has-text-weight-bold">メニュー</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="column is-9">
        <slot />
      </div>
    </section>
  </div>
</template>
<script>
export default {
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
