<template>
  <div class="controls">
    <button
      class="left"
      @click.prevent="decreaseHandler"
      :disabled="content.count === 0"
    >
      <MinusSVG />
    </button>
    <span class="center">{{ content.count !== 0 ? content.count : 1 }}</span>
    <button
      class="right"
      @click.prevent="increaseHandler"
      :disabled="content.count === 0"
    >
      <PlusSVG />
    </button>
  </div>
</template>
<script lang="js">
import { toRefs } from 'vue';
import { useStore } from 'vuex';
import MinusSVG from './components/MinusSVG.vue';
import PlusSVG from './components/PlusSVG.vue';

export default {
  components: { MinusSVG, PlusSVG },
  name: 'BasketProductControls',
  props: {
    content: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    const {content} = toRefs(props)
    const store = useStore()
    return {
      increaseHandler: () => store.commit('increaseBasketProductCount', content.value),
      decreaseHandler: () => store.commit('decreaseBasketProductCount', content.value),
    }
  }
}
</script>
<style lang="scss" scoped>
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  .left,
  .center,
  .right {
    width: 40px;
    height: 24px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left,
  .right {
    background-color: #f2f2f2;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background-color: #eaeaea;
    }
    &:disabled {
      cursor: auto;
    }
  }
}
.product.disabled {
  .image,
  .info,
  .controls {
    opacity: 0.2;
  }
}
@media (max-width: 1100px) {
  .product {
    .controls {
      flex-direction: column-reverse;
    }
  }
}
</style>
