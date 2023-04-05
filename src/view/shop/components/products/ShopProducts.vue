<template>
  <div class="main">
    <div class="head">
      <p class="count">{{ productsCount }} товаров</p>
      <button class="sort">Сначала дорогие <ArrowSVG /></button>
    </div>
    <div class="products">
      <ShopProduct v-for="item in products" :content="item" :key="item.id" />
    </div>
  </div>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';
import ShopProduct from './components/ShopProduct.vue';
import ArrowSVG from './components/ArrowSVG.vue';

export default {
  components: { ShopProduct, ArrowSVG },
  name: "ShopProducts",
  setup(props) {
    const store = useStore()
    return {
      products: computed(() => store.getters.getProducts),
      productsCount: computed(() => store.getters.getProductsCount)
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 45px;
    .count,
    .sort {
      font-size: 12px;
      line-height: 12px;
      font-weight: 500;
      color: #1f2020;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .sort {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 4px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 24px;
  }
}
</style>
