<template>
    <section class="hero is-medium bg-img" v-bind:style='{ background: "url(" + encodeURI(mainpic) + ")", 
  backgroundRepeat: "no-repeat", backgroundAttachment: "fixed",  backgroundPosition: "center", backgroundSize: "cover" }'>
      <div class="hero-body">
        <div class="container">
          <h1 class="title family-serif has-text-centered ts is-size-2">
            <slot />
          </h1>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    props: ['mainpic'],
    data(){
        return{
        }
    },
}
</script>

<style scoped>
.bg-img {
  background-color: #999;
}
.family-serif.title {
  /* font-family: a-otf-futo-min-a101-pr6n, serif !important; */
  font-weight: 600;
}
/* stylelint-disable */
.ts {
  color: white;
  text-shadow: 0px 0px 6px #000;
}
/* stylelint-enable */
</style>
