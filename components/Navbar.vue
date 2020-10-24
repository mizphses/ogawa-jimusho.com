<template>
  <div>
    <b-navbar class="navbar is-fixed-top">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="~/assets/logo.svg" height="80" width="200" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#"> フロントページ </b-navbar-item>
        <b-navbar-dropdown label="私たちについて">
          <b-navbar-item href="#"> 当事務所について </b-navbar-item>
          <b-navbar-item href="#"> 業務内容 </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item href="#"> ご連絡 </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item
          @click="isCardModalActive = true">
          <span class="is-size-3 has-text-weight-bold">
            Contact
          </span>
        </b-navbar-item>
      </template>
    </b-navbar>
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
                <a class="has-text-weight-bold is-size-4" href="mailto:nozomu-ogawa@tkcnf.or.jp">
                  nozomu-ogawa@tkcnf.or.jp
                </a>
              </p>
              <br>
            <small>グレーの箇所をクリックすると消えます</small>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ContactModal from '~/components/ContactModal'
export default {
  components: {
    ContactModal,
  },
  data() {
    return {
      isCardModalActive: false,
    }
  }
}
</script>
<style scoped>
.navbar {
  height: 8vh;
}
</style>
