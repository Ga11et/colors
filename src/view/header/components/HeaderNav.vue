<template>
  <nav class="nav">
    <ul class="ul">
      <li class="item" v-for="item in nav" :key="item.id">{{ item.text }}</li>
    </ul>
  </nav>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HeaderNav',
  setup(props) {
    const store = useStore()
    return {
      nav: computed(() => store.getters.getNav)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    .item {
      font-size: 14px;
      line-height: 14px;
      font-weight: 400;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #1f2020;
      &:hover {
        cursor: pointer;
        color: #7bb899;
      }
    }
  }
}
@media (max-width: 1300px) {
  .nav {
    .ul {
      gap: 12px;
    }
  }
}
</style>
