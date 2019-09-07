<template>
  <div class="home">
    <HeaderBar />
    <nav class="nav">我是导航组件</nav>
    <SwiperComponent />

    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
    <div class="sec">1</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBar from '../components/HeaderBar/headerBar'
import SwiperComponent from '../components/Swiper/Swiper'
export default {
  name: 'home',
  components: {
    SwiperComponent,
    HeaderBar
  }
}
</script>
<style lang="scss">
.nav {
  width: 100%;
  height: .9rem;
  background: red;
  position: sticky;
  left:0;
  top:0;
  z-index: 2;
}
  .sec{
    width: 90%;
    height: 2rem;
    background: #eee;
    border-radius: 10px;
    margin: 5px auto;
  }
</style>
