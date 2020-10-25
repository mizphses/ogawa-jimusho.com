<template>
  <div>
    <Hero mainpic="/hero/ourbusiness.webp">業務内容</Hero>
    <main class="container is-fluid">
      <div
        v-for="item in jsonAll"
        :key="item.message"
        class="card"
        :style="{ padding: '1em', margin: '1em' }"
      >
        <div :id="item.title" class="card-content">
          <h3 class="title">{{ item.title }}</h3>
          <p :style="{ whiteSpace: 'pre-wrap' }">{{ item.content }}</p>
        </div>
      </div>
      <section class="hero is-large">
        <div class="hero-body">
          <div class="container">
            <p class="title family-serif has-text-centered is-size-2">
              その他にもさまざまな業務に対応しております
            </p>
            <p class="subtitle family-serif has-text-centered is-size-3">
              お気軽にお問い合わせください
            </p>
            <div class="subtitle has-text-centered is-size-3">
              <span class="button is-info" @click="isCardModalActive = true">
                お問い合わせはこちら
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <h3 class="has-text-weight-bold has-text-centered is-size-4">
              電話・メールでご連絡をお待ちしています！
            </h3>
            <p class="has-text-centered">
              <a class="has-text-weight-bold is-size-4" href="tel:0862714650">
                ℡ 086-271-4650
              </a>
              <br />
              <a
                class="has-text-weight-bold is-size-4"
                href="mailto:nozomu-ogawa@tkcnf.or.jp"
              >
                nozomu-ogawa@tkcnf.or.jp
              </a>
            </p>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
export default {
  components: {
    Hero,
  },
  asyncData({ store }) {
    // jsonAll: store.getters['json/getAll']
    const jsonAll = store.getters['json/getAll']
    return { jsonAll }
  },
  data() {
    return {
      isCardModalActive: false,
    }
  },
}
</script>

<style>
.bg-img {
  background-color: #000;
}
.family-serif.title {
  /* font-family: a-otf-futo-min-a101-pr6n, serif !important; */
  font-weight: 600;
}
.family-serif1 {
  font-family: "A1明朝",	"A1 Mincho", serif;
  font-weight: 400;
}
</style>
