<template>
  <Header />
  <main>
    <Slider />
    <Shop />
  </main>
</template>
<script>
import Header from "./view/header/header.vue";
import Shop from "./view/shop/Shop.vue";
import Slider from "./view/slider/Slider.vue";

export default {
  components: { Header, Slider, Shop },
  name: "App",
};
</script>
<style lang="scss" scoped></style>
