<template>
  <div class="mobileNav">
    <button class="handler">
      <MenuSVG class="svg" />
    </button>
  </div>
</template>
<script lang="js">
import MenuSVG from './MenuSVG.vue';

export default {
  components: { MenuSVG },
  name: "HeaderMobileMenu",
}
</script>
<style lang="scss" scoped>
.mobileNav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .handler {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg {
      stroke: #1f2020;
      width: 24px;
      height: 24px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
