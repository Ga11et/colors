<template>
  <Header />
  <Basket v-if="isBasketShow" />
  <main>
    <Slider />
    <Shop />
  </main>
  <Footer />
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Basket from "./view/basket/Basket.vue";
import Footer from "./view/footer/Footer.vue";
import Header from "./view/header/header.vue";
import Shop from "./view/shop/Shop.vue";
import Slider from "./view/slider/Slider.vue";

export default {
  components: { Header, Slider, Shop, Footer, Basket },
  name: "App",
  setup(props) {
    const store = useStore();
    return {
      isBasketShow: computed(() => store.getters.getBasketActive),
    };
  },
};
</script>
<style lang="scss" scoped></style>
