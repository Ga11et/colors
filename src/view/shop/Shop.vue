<template>
  <section class="shop">
    <ShopFilters />
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
</style>
