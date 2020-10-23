<template>
<div>
  <section class="hero is-medium bg-img">
    <div class="hero-body">
      <div class="container">
        <h1 class="title family-serif has-text-centered">
          あなたとともに、この道を歩む。
        </h1>
      </div>
    </div>
  </section>
  <WakuHome>
    <div class="container ">
      あ
    </div>
  </WakuHome>
</div>
</template>

<script>
import Card from '~/components/Card'
import WakuHome from '~/components/WakuHome'

export default {
  name: 'HomePage',

  components: {
    Card,
    WakuHome
  },
}
</script>

<style scoped>
  .bg-img { 
    background: url('~assets/head_load.jpg');
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    background-color: #999;
  }
  .family-serif{
    font-family: a-otf-futo-min-a101-pr6n, serif !important;
    font-weight: 400;
  }
</style>
