<template>
  <div class="sortPopup">
    <button class="sort" @click="openModalHandler">
      {{ activeOption.ru }} <ArrowSVG />
    </button>
    <div v-if="isModalActive" class="modal"></div>
    <div v-if="isModalActive" class="options">
      <button
        :class="['option', { active: item.en === activeOption.en }]"
        v-for="item in options"
        :key="item.id"
        @click.prevent="optionHandler(item)"
      >
        {{ item.ru }}
      </button>
    </div>
  </div>
</template>
<script lang="js">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ArrowSVG from './components/ArrowSVG.vue';

export default {
  components: { ArrowSVG },
  name: "ShopSortOptionsInput",
  setup(props) {
    const store = useStore()
    const isModalActive = ref(false)
    const optionHandler = (item) => {
      store.commit('setSortOption', item)
      isModalActive.value = false
    }
    return {
      activeOption: computed(() => store.getters.getSortOption),
      options: computed(() => store.getters.getSortOptions),
      optionHandler,
      openModalHandler: () => isModalActive.value = true,
      isModalActive
    }
  }
}
</script>
<style lang="scss" scoped>
.sortPopup {
  position: relative;
  .sort {
    position: relative;
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    color: #1f2020;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 4px;
    &:hover {
      cursor: pointer;
    }
  }
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: 9999;
  }
  .options {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 280px;
    z-index: 10000;
    .option {
      font-family: inherit;
      font-size: 12px;
      line-height: 12px;
      font-weight: 500;
      color: #1f2020;
      text-transform: uppercase;
      background-color: white;
      border: none;
      padding: 17px 24px;
      text-align: left;
      &:hover {
        cursor: pointer;
        background-color: #ccdfd5;
      }
    }
    .option.active {
      background-color: #7bb899;
      &:hover {
        cursor: auto;
      }
    }
  }
}
</style>
