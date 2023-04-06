<template>
  <div class="result">
    <div class="value">
      <p class="total">Итого</p>
      <p class="amount">{{ totalCost }}₽</p>
    </div>
    <button class="accept">Подтвердить заказ</button>
  </div>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { priceServises } from './servises/priceServises'

export default {
  name: 'BasketResult',
  setup(props) {
    const store = useStore()
    return {
      totalCost: computed(() => priceServises.formatPrice(store.getters.getTotalCost))
    }
  }
}
</script>
<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .value {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    .total {
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
      color: #1f2020;
    }
    .amount {
      font-size: 30px;
      line-height: 30px;
      font-weight: 500;
      color: #1f2020;
      letter-spacing: -0.02em;
    }
  }
  .accept {
    width: 240px;
    height: 56px;
    border: none;
    background-color: #7bb899;
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: #1f2020;
    text-transform: uppercase;
    font-family: inherit;
    transition: 300ms;
    &:hover {
      cursor: pointer;
      background-color: #a0ceb7;
      transition: 300ms;
    }
  }
}
</style>
