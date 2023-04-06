<template>
  <div class="background"></div>
  <div class="basket">
    <BasketHead />
    <BasketProducts />
    <BasketResult />
  </div>
</template>
<script lang="js">
import BasketHead from './components/head/BasketHead.vue';
import BasketProducts from './components/products/BasketProducts.vue';
import BasketResult from './components/result/BasketResult.vue';

export default {
  components: { BasketHead, BasketProducts, BasketResult },
  name: "Basket",
}
</script>
<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #000000b3;
  z-index: 9999;
}
.basket {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 10000;
  background-color: white;
  padding: 40px;
  min-width: 600px;
  display: grid;
  grid-template-rows: 48px 1fr 56px;
  gap: 80px;
}
</style>
