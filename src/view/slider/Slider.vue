<template>
  <div class="swiper">
    <SliderPath class="path" :content="['Главная', 'Продукты', 'Краски']" />
    <swiper
      class="main"
      :modules="modules"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide v-for="item in slides" :key="item.id">
        <SwiperItem :content="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="js">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import SwiperItem from './components/SliderItem.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './mySlider.css'

import { useStore } from 'vuex';
import { computed } from 'vue';
import SliderPath from './components/SliderPath.vue';
export default {
  components: { Swiper, SwiperSlide, SwiperItem, SliderPath },
  name: 'Slider',
  setup() {
    const store = useStore()
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      slides: computed(() => store.getters.getSlides),
      modules: [Navigation, Pagination]
    };
  },
}
</script>
<style lang="scss" scoped>
.swiper {
  height: 560px;
  position: relative;
  .path {
    position: absolute;
    top: 32px;
    left: 64px;
    z-index: 5;
  }
  .main {
    height: 100%;
  }
}
</style>
