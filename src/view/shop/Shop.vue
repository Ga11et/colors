<template>
  <section class="shop">
    <ShopFilters class="desctop" />
    <ShopProducts />
  </section>
</template>
<script lang="js">
import ShopFilters from './components/filters/ShopFilters.vue';
import ShopProducts from './components/products/ShopProducts.vue';

export default {
  name: "Shop",
  components: { ShopFilters, ShopProducts }
}
</script>
<style lang="scss" scoped>
.shop {
  margin: 72px 64px;
  display: grid;
  grid-template-columns: calc(367px - 64px) 1fr;
}
@media (max-width: 1300px) {
  .shop {
    margin: 72px 20px;
  }
}
@media (max-width: 1100px) {
  .shop {
    margin: 40px 20px;
    grid-template-columns: 1fr;
    .desctop {
      display: none;
    }
  }
}
</style>
