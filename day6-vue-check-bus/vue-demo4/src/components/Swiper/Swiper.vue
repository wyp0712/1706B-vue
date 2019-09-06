<template>

  <div class="swiper-box">
    <!-- @someSwiperEvent="callback" -->
     <swiper :options="swiperOption" ref="mySwiper" >
       <swiper-slide> 我是slide1 </swiper-slide>
       <swiper-slide> 我是slide1 </swiper-slide>
       <swiper-slide> 我是slide1 </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
     </swiper>
  </div>
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">1</div>
    </div>
  </div> -->
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'canrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  // 方dom操作的地方
  mounted () {
    console.log(this.swiper, 'swiper-------------1')
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .swiper-container {
    width: 100%;
    height: 200px;
    border:1px solid black;
  }
</style>
