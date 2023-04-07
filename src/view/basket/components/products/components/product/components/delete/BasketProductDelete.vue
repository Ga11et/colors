<template>
  <div class="delete">
    <button class="button" @click="deleteHandler" v-if="content.count !== 0">
      <CloseSVG class="svg" />
    </button>
    <button class="button" @click="repeatHandler" v-else>
      <RepeatSVG class="svg" />
    </button>
  </div>
</template>
<script lang="js">
import { toRefs } from 'vue';
import { useStore } from 'vuex';
import CloseSVG from './components/CloseSVG.vue';
import RepeatSVG from './components/RepeatSVG.vue';

export default {
  components: { CloseSVG, RepeatSVG },
  name: "BasketProductDelete",
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
      repeatHandler: () => store.commit('repeatBasketProduct', content.value),
      deleteHandler: () => store.commit('deleteBasketProduct', content.value),
    }
  }
}
</script>
<style lang="scss" scoped>
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
.product.disabled {
  .delete {
    .button {
      .svg {
        opacity: 1;
      }
    }
  }
}
</style>
