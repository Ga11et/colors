<template>
  <div class="main">
    <div class="head">
      <p class="count desctop">{{ productsCount }} товаров</p>
      <MobileFilters />
      <ShopSortOptionsInput />
    </div>
    <div class="products">
      <ShopProduct
        v-for="item in products"
        :content="item"
        :key="item.id"
        :basketIds="basketIds"
      />
      <div class="noBorder" key="border"></div>
    </div>
  </div>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';
import MobileFilters from './components/mobileFilters/MobileFilters.vue';
import ShopProduct from './components/product/ShopProduct.vue';
import ShopSortOptionsInput from './components/optionsInput/ShopSortOptionsInput.vue';

export default {
  components: { ShopProduct, ShopSortOptionsInput, MobileFilters },
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
@media (max-width: 1500px) {
  .main {
    .products {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
}
@media (max-width: 1300px) {
  .main {
    .products {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
@media (max-width: 1100px) {
  .main {
    .head {
      padding-bottom: 24px;
      .count.desctop {
        display: none;
      }
    }
    .products {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
