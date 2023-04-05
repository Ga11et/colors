<template>
  <Header />
  <main>
    <Slider />
  </main>
</template>
<script>
import Header from "./view/header/header.vue";
import Slider from "./view/slider/Slider.vue";

export default {
  components: { Header, Slider },
  name: "App",
};
</script>
<style lang="scss" scoped></style>
