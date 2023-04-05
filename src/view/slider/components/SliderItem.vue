<template>
  <div class="item">
    <img class="image" :src="content.image" :alt="content.heading" />
    <div class="content">
      <h2 class="heading">{{ content.heading }}</h2>
      <p class="description">{{ content.description }}</p>
    </div>
  </div>
</template>
<script lang="js">
import 'swiper/css'

export default {
  name: 'SliderItem',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
}
</script>
<style lang="scss" scoped>
.item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    pointer-events: none;
  }
  .content {
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    color: white;
    max-width: 470px;
    .heading {
      font-size: 72px;
      font-weight: 400;
      line-height: 72px;
      letter-spacing: -0.02em;
    }
    .description {
      font-size: 16px;
      line-height: 21px;
      font-weight: 500;
      letter-spacing: 0.02em;
      text-align: center;
    }
  }
}
</style>
