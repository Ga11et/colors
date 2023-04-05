<template>
  <Header />
  <main>
    <Slider />
    <Shop />
  </main>
  <Footer />
</template>
<script>
import Footer from "./view/footer/Footer.vue";
import Header from "./view/header/header.vue";
import Shop from "./view/shop/Shop.vue";
import Slider from "./view/slider/Slider.vue";

export default {
  components: { Header, Slider, Shop, Footer },
  name: "App",
};
</script>
<style lang="scss" scoped></style>
