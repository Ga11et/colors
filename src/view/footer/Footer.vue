<template>
  <footer class="footer"></footer>
</template>
<script lang="js">
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 160px;
  background-color: black;
}
@media (max-width: 1100px) {
  .footer {
    height: 80px;
  }
}
</style>
