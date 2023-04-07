<template>
  <div :class="['product', { disabled: content.count === 0 }]">
    <img class="image" :src="content.image" :alt="content.name" />
    <div class="info">
      <p class="name">{{ productName }}</p>
      <p class="price">{{ content.price * content.count }} ₽</p>
    </div>
    <BasketProductsControls :content="content" />
    <BasketProductDelete :content="content" />
  </div>
</template>
<script lang="js">
import { computed, toRefs } from 'vue';
import { textServises } from '../../../../../../servises/textServises';
import BasketProductsControls from './components/controls/BasketProductsControls.vue';
import BasketProductDelete from './components/delete/BasketProductDelete.vue';

export default {
  components: { BasketProductsControls, BasketProductDelete },
  name: 'BasketProduct',
  props: {
    content: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    const {content} = toRefs(props)
    return {
      productName: computed(() => textServises.fixedLength(content.value.name))
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  height: 120px;
  display: grid;
  grid-template-columns: 96px 4fr 3fr 30px;
  gap: 8px;
  padding: 12px 0;
  border-top: 1px solid #0000001a;
  .image {
    display: block;
    object-fit: cover;
    width: 100%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 170px;
    .name {
      font-size: 16px;
      line-height: 18px;
      font-weight: 300;
      color: #1f2020;
      letter-spacing: 0.02em;
    }
    .price {
      font-size: 16px;
      line-height: 16px;
      font-weight: 600;
      color: #1f2020;
    }
  }
}
.product.disabled {
  .image,
  .info {
    opacity: 0.3;
  }
}
@media (max-width: 1100px) {
  .product {
    grid-template-columns: 96px 5fr 1fr 1fr;
    .info {
      .name {
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}
</style>
