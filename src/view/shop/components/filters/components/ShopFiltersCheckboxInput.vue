<template>
  <label class="label">
    <span :class="['check', { active: content.value }]"
      ><span class="box"></span
    ></span>
    <input
      class="input"
      type="checkbox"
      :checked="content.value"
      @change="toggleHandler"
    />
    {{ content.text }}
  </label>
</template>
<script lang="js">
import { toRefs } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ShopFiltersCheckboxInput',
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
      toggleHandler: () => store.commit('toggleFilter', content.value.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: #1f2020;
  text-transform: uppercase;
  .check {
    display: flex;
    align-items: center;
    width: 36px;
    height: 22px;
    background-color: #f2f2f2;
    border-radius: 40px;
    position: relative;
    transition: 300ms;
    .box {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #1f2020;
      position: absolute;
      left: 7px;
      transition: 300ms;
    }
  }
  .check.active {
    background-color: #7bb899;
    transition: 300ms;
    .box {
      right: 7px;
      left: unset;
      transition: 300ms;
    }
  }
  .input {
    display: none;
  }
}
</style>
