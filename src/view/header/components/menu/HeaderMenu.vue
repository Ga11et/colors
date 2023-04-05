<template>
  <div class="menu">
    <SearchSVG class="item" />
    <ProfileSVG class="item" />
    <HeartSVG class="item" />
    <button class="basket">{{ count }}</button>
  </div>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';
import HeartSVG from './components/HeartSVG.vue';
import ProfileSVG from './components/ProfileSVG.vue';
import SearchSVG from './components/SearchSVG.vue';

export default {
  components: { SearchSVG, ProfileSVG, HeartSVG },
  name: "HeaderMenu",
  setup(props) {
    const store = useStore()
    return {
      count: computed(() => store.getters.getBasketCount)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  gap: 20px;
  .item {
    &:hover {
      cursor: pointer;
      stroke: #7bb899;
    }
  }
  .basket {
    background-color: #7bb899;
    border: none;
    border-radius: 50%;
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: #1f2020;
    width: 24px;
    height: 24px;
  }
}
</style>
