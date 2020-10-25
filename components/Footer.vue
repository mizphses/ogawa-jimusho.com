<template>
  <footer class="footer">
    <div class="content container is-fluid">
      <p>
        <strong v-if="now == 2020"
          >©️{{ now }} Ogawa Tax Accountant Office（尾川望税理士事務所） All
          Rights Reserved</strong
        >
        <strong v-if="now != 2020"
          >©️2020-{{ now }} Ogawa Tax Accountant Office（尾川望税理士事務所）
          All Rights Reserved</strong
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    now() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>
