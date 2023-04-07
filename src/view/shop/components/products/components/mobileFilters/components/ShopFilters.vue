<template>
  <aside class="filters">
    <ShopFiltersCheckboxInput
      v-for="item in filters"
      :key="item.id"
      :content="item"
    />
  </aside>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';
import ShopFiltersCheckboxInput from './components/ShopFiltersCheckboxInput.vue';

export default {
  components: { ShopFiltersCheckboxInput },
  name: "ShopFilters",
  setup(props) {
    const store = useStore()
    return {
      filters: computed(() => store.getters.getFilters)
    }
  }
}
</script>
<style lang="scss" scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
