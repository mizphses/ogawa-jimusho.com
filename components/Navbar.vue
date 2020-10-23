<template>
  <b-navbar class="navbar">
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
      <b-navbar-item href="tel:0862714650">
        <i
          class="em em-telephone"
          aria-role="presentation"
          aria-label="telephone"
        />
        <span class="has-text-weight-bold is-size-4 has-text-color-success">
          086-271-4650
        </span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {}
</script>
<style scoped>
.navbar {
  height: 8vh;
}
</style>
