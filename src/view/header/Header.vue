<template>
  <header class="header">
    <LogoSVG />
    <HeaderNav />
    <HeaderPhone />
    <HeaderMenu />
  </header>
</template>
<script lang="js">
import HeaderNav from './components/HeaderNav.vue';
import LogoSVG from './components/LogoSVG.vue'
import HeaderPhone from './components/HeaderPhone.vue'
import HeaderMenu from './components/menu/HeaderMenu.vue';
export default {
  components: { LogoSVG, HeaderNav, HeaderPhone, HeaderMenu },
  name: 'Header'
}
</script>
<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 200px 1fr 150px 150px;
  align-items: center;
  gap: 100px;
  height: 104px;
  margin: 0 64px;
}
</style>
