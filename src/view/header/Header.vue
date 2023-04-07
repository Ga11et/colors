<template>
  <header class="header">
    <LogoSVG class="logo" />
    <HeaderNav class="deckNav" />
    <HeaderMobileMenu class="mobileNav" />
    <HeaderPhone class="phone" />
    <HeaderMenu class="menu" />
  </header>
</template>
<script lang="js">
import HeaderNav from './components/HeaderNav.vue';
import LogoSVG from './components/LogoSVG.vue'
import HeaderPhone from './components/HeaderPhone.vue'
import HeaderMenu from './components/menu/HeaderMenu.vue';
import HeaderMobileMenu from './components/HeaderMobileMenu.vue';
export default {
  components: { LogoSVG, HeaderNav, HeaderPhone, HeaderMenu, HeaderMobileMenu },
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
  .mobileNav {
    display: none;
  }
}
@media (max-width: 1500px) {
  .header {
    gap: 30px;
  }
}
@media (max-width: 1300px) {
  .header {
    grid-template-columns: 150px 1fr 150px 150px;
    margin: 0 20px;
  }
}
@media (max-width: 1100px) {
  .header {
    grid-template-columns: 1fr 1fr 1fr;
    height: 64px;
    border-bottom: 1px solid #1f20200f;
    .logo {
      grid-column: 2/3;
      justify-self: center;
    }
    .deckNav,
    .phone {
      display: none;
    }
    .mobileNav {
      display: block;
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .menu {
      grid-column: 3/4;
      justify-self: flex-end;
    }
  }
}
</style>
