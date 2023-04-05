<template>
  <div class="product">
    <img class="image" :src="content.image" :alt="content.name" />
    <h3 class="name">{{ content.name }}</h3>
    <div class="bottom">
      <p class="price">{{ content.price }} ₽</p>
      <button class="buy"><PlusSVG /></button>
    </div>
  </div>
</template>
<script lang="js">
import PlusSVG from './PlusSVG.vue';

export default {
  name: "ShopProduct",
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  components: { PlusSVG }
}
</script>
<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-rows: 278px 1fr 32px;
  gap: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid #0000001a;
  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
  .name {
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    color: #1f2020;
    letter-spacing: 0.02em;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price {
      font-size: 16px;
      line-height: 16px;
      font-weight: 600;
      color: #1f2020;
    }
    .buy {
      background-color: #7bb899;
      border-radius: 8px;
      padding: 6px 30px;
      border: none;
      display: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &:hover {
    .buy {
      display: inline-block;
    }
  }
}
</style>
