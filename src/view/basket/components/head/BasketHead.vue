<template>
  <div class="head">
    <h4 class="heading">Корзина</h4>
    <button class="close" @click.prevent="closeHandler"><CloseSVG /></button>
  </div>
</template>
<script lang="js">
import { useStore } from 'vuex';
import CloseSVG from '../head/CloseSVG.vue';

export default {
  components: { CloseSVG },
  name: "BasketHead",
  setup(props) {
    const store = useStore()
    return {
      closeHandler: () => store.commit('toggleBasketActive')
    }
  }
}
</script>
<style lang="scss" scoped>
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .heading {
    font-size: 30px;
    line-height: 30px;
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: transparent;
    border: 1px solid #0000001a;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      background-color: #7bb89a4d;
    }
  }
}
</style>
