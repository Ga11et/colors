<template>
  <div class="path">
    <template v-for="item in content" :key="item">
      <div class="item">
        {{ item }}
      </div>
      <span class="dot"></span>
    </template>
  </div>
</template>
<script lang="js">
export default {
  name: 'SliderPath',
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.path {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  line-height: 10px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: white;
  opacity: 0.3;
  .dot {
    display: inline-block;
    width: 3px;
    height: 3px;
    background-color: white;
    opacity: 0.3;
    border-radius: 50%;
    &:last-child {
      display: none;
    }
  }
}
@media (max-width: 1100px) {
  .path {
    color: #1f2020;
    .dot {
      background-color: #1f2020;
    }
  }
}
</style>
