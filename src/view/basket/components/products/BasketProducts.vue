<template>
  <div class="products">
    <div class="head">
      <p class="count">{{ count }} товара</p>
      <button class="clear" @click="clearHandler">Очистить список</button>
    </div>
    <BasketProduct v-for="item in products" :key="item.id" :content="item" />
  </div>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';
import BasketProduct from './components/product/BasketProduct.vue'

export default {
  components: {BasketProduct},
  name: 'BasketProducts',
  setup(props) {
    const store = useStore()
    return {
      count: computed(() => store.getters.getBasketCount),
      products: computed(() => store.getters.getBasketProducts),
      clearHandler: () => store.commit('deleteAllBasketProducts')
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    .count {
      font-size: 14px;
      line-height: 14px;
      font-weight: 400;
      color: #1f2020;
    }
    .clear {
      font-family: inherit;
      font-size: 14px;
      line-height: 14px;
      font-weight: 300;
      color: #1f202066;
      text-transform: lowercase;
      background-color: transparent;
      border: none;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}
</style>
