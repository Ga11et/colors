<template>
  <div class="main">
    <div class="head">
      <p class="count">{{ productsCount }} товаров</p>
      <ShopSortOptionsInput />
    </div>
    <transition-group name="products" tag="div" class="products">
      <ShopProduct
        v-for="item in products"
        :content="item"
        :key="item.id"
        :basketIds="basketIds"
      />
      <div class="noBorder"></div>
    </transition-group>
  </div>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';
import ShopProduct from './components/ShopProduct.vue';
import ShopSortOptionsInput from './components/ShopSortOptionsInput.vue';

export default {
  components: { ShopProduct, ShopSortOptionsInput },
  name: "ShopProducts",
  setup(props) {
    const store = useStore()
    return {
      products: computed(() => store.getters.getProducts),
      productsCount: computed(() => store.getters.getProductsCount),
      basketIds: computed(() => store.getters.getBasketIds)
    }
  }
}
</script>
<style lang="scss" scoped>
// animation
.products-move,
.products-enter-active,
.products-leave-active {
  transition: all 0.5s ease;
}
.products-enter-from,
.products-leave-to {
  opacity: 0;
}
.products-leave-active {
  position: absolute;
}
// styles
.main {
  min-height: 1000px;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 45px;
    .count {
      font-size: 12px;
      line-height: 12px;
      font-weight: 500;
      color: #1f2020;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
  }
  .products {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 24px;
    .noBorder {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: white;
    }
  }
}
</style>
