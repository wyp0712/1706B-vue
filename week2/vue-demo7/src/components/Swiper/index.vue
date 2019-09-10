<template>
  <div class="swiper-box">
      <swiper :options="swiperOption" ref="mySwiper" >
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
      </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        autoplay: true
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
  .swiper-box {
    width: 100%;
    height: 150px;
    border-bottom: 1px solid black;
    padding: 3%;
    border-radius: 20px;
    .swiper-container {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
      }
      .swiper-slide {
        width: 100%;
        height: 100%;
        img {
                  width: 100%;
        height: 100%;
        }
      }
    }
  }
</style>
