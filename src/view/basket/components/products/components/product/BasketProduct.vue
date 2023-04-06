<template>
  <div :class="['product', { disabled: content.count === 0 }]">
    <img class="image" :src="content.image" :alt="content.name" />
    <div class="info">
      <p class="name">{{ content.name }}</p>
      <p class="price">{{ content.price }} ₽</p>
    </div>
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
    <div class="delete">
      <button class="button" @click="deleteHandler" v-if="content.count !== 0">
        <CloseSVG class="svg" />
      </button>
      <button class="button" @click="repeatHandler" v-else>
        <RepeatSVG class="svg" />
      </button>
    </div>
  </div>
</template>
<script lang="js">
import { toRefs } from 'vue';
import { useStore } from 'vuex';
import CloseSVG from './components/CloseSVG.vue';
import MinusSVG from './components/MinusSVG.vue';
import PlusSVG from './components/PlusSVG.vue';
import RepeatSVG from './components/RepeatSVG.vue';

export default {
  components: { MinusSVG, PlusSVG, CloseSVG, RepeatSVG },
  name: 'BasketProduct',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const {content} = toRefs(props)
    const store = useStore()
    return {
      increaseHandler: () => store.commit('increaseBasketProductCount', content.value),
      decreaseHandler: () => store.commit('decreaseBasketProductCount', content.value),
      repeatHandler: () => store.commit('repeatBasketProduct', content.value),
      deleteHandler: () => store.commit('deleteBasketProduct', content.value),
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  height: 120px;
  display: grid;
  grid-template-columns: 96px 4fr 3fr 30px;
  gap: 8px;
  padding: 12px 0;
  border-top: 1px solid #0000001a;
  .image {
    display: block;
    object-fit: cover;
    width: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 170px;
    .name {
      font-size: 16px;
      line-height: 18px;
      font-weight: 300;
      color: #1f2020;
      letter-spacing: 0.02em;
    }
    .price {
      font-size: 16px;
      line-height: 16px;
      font-weight: 600;
      color: #1f2020;
    }
  }
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
  .delete {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      background-color: transparent;
      border: none;
      .svg {
        stroke: #1f2020;
        opacity: 0.2;
      }
      &:hover {
        cursor: pointer;
        .svg {
          opacity: 1;
        }
      }
    }
  }
}
.product.disabled {
  .image,
  .info,
  .controls {
    opacity: 0.2;
  }
  .delete {
    .button {
      .svg {
        opacity: 1;
      }
    }
  }
}
</style>
