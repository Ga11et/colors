<template>
  <div class="phone">
    <a class="link" :href="`tel:${phone}`">{{ phone }}</a>
    <button class="button">Заказать звонок</button>
  </div>
</template>
<script lang="js">
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HeaderPhone',
  setup(props) {
    const store = useStore()
    return {
      phone: computed(() => store.getters.getPhone)
    }
  }
}
</script>
<style lang="scss" scoped>
.phone {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  .link {
    font-size: 15px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #1f2020;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .button {
    background-color: transparent;
    border: none;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #1f2020;
    opacity: 0.3;
    transition: 300ms;
    &:hover {
      opacity: 1;
      cursor: pointer;
      transition: 300ms;
    }
  }
}
</style>
