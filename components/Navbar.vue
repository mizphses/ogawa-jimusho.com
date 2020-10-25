<template>
  <div>
    <b-navbar class="navbar" fixed-top="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="~/assets/logo.svg" height="80" width="200" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="/"> ホーム </b-navbar-item>
        <b-navbar-item href="our_business"> 業務内容 </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-btn
              @click="isCardModalActive = true"
              class="button is-info"
            >
              お問い合わせはこちら！
            </b-btn>
          </div>
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
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
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
