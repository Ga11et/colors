<template>
  <button class="open" @click="filtersHandler">Фильтры</button>
  <div class="modal" v-if="isActive"></div>
  <transition name="mobileFilters">
    <div v-if="isActive" class="mobileFilters">
      <div class="close">
        <button class="button" @click="filtersHandler">
          <span class="span"></span>
        </button>
      </div>
      <div class="filters">
        <ShopFiltersCheckboxInput
          v-for="item in filters"
          :key="item.id"
          :content="item"
        />
      </div>
    </div>
  </transition>
</template>
<script lang="js">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import ShopFiltersCheckboxInput from './components/components/ShopFiltersCheckboxInput.vue';

export default {
  components: { ShopFiltersCheckboxInput },
  name: "MobileFilters",
  setup(props) {
    const store = useStore()
    return {
      filters: computed(() => store.getters.getFilters),
      filtersHandler: () => store.commit('toggleMobileFilters'),
      isActive: computed(() => store.getters.getMobileFiltersActive),
    }
  }
}
</script>
<style lang="scss" scoped>
// animation
.mobileFilters-enter-active,
.mobileFilters-leave-active {
  transition: all 600ms;
}
.mobileFilters-enter,
.mobileFilters-leave-to {
  transform: translateY(100%);
}
// styles
.open {
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
  color: #1f2020;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #00000094;
  z-index: 9999;
}
.mobileFilters {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: white;
  z-index: 10000;
  border-radius: 24px 24px 0 0;
  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    .button {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      &:hover {
        cursor: pointer;
      }
      .span {
        display: inline-block;
        height: 4px;
        width: 28px;
        background-color: #1f202099;
        border-radius: 40px;
      }
    }
  }
  .filters {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 28px 24px;
  }
}
</style>
