<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/banner1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/banner2.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '@/assets/style/swiper.css'
export default {
  name: "SwiperComponent",
  data() {
    return {}
  },
  created() {
    
  },
  mounted() {
    new Swiper('.swiper-container', {})
  },
};
</script>
<style>
.swiper-box {
  width: 100%;
  height: 200px;
}
.swiper-container {
  width: 100%;
  height: 200px;
}
.swiper-wrapper {
  width: 100%;
  height: 200px;
}
.swiper-slide {
  width: 100%;
  height: 200px;
}
.swiper-slide img {
  width: 100%;
  height: 200px;
}
</style>