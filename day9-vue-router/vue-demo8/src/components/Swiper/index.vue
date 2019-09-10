<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img src="../../assets/img/banner1.webp" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/banner2.webp" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/banner1.webp" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/banner2.webp" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/img/banner1.webp" alt="">
    </swiper-slide>
     <swiper-slide>
      <img src="../../assets/img/banner2.webp" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
  
}
</script>
<style lang="scss">
 .swiper-container {
    width: 100%;
    height: 150px;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
    }
 }  
</style>
