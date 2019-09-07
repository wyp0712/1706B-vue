<template>
  <div class="home">
    <HeaderBar />
    <nav class="nav">
      <span @click="bindEvent(item, index)" :class="{active: item.state}" v-for="(item, index) in tabList" :key="index">{{item.name}}</span>
    </nav>
    <div class="movie-content">
       <component :is="componentId"></component> 
    </div>
    {{componentId}}
    <!-- <SwiperComponent /> -->
    <!-- <div class="sec">1</div>
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
    <div class="sec">1</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBar from '../components/HeaderBar/headerBar'
import MovieLeft from '../components/MovieLeft/index'
import MovieRight from '../components/MovieRight/index'
// import SwiperComponent from '../components/Swiper/Swiper'
export default {
  name: 'home',
  data () {
    return {
      currentTab: 'MovieLeft',
      tabList: [
        {
          name: 'MovieLeft',
          state: true
        },
        {
          name: 'MovieRight',
          state: false
        }
      ],
      tabIndex: 0
    }
  },
  components: {
    // SwiperComponent,
    HeaderBar,
    MovieLeft,
    MovieRight
  },
  computed: {
    componentId () {
      return `${this.currentTab}`
    }
  },
  methods: {
    bindEvent (item, index) {
      console.log(item.name)
      this.currentTab = item.name
      this.tabList[this.tabIndex].state = false
      item.state = true
      this.tabIndex = index
    }
  }
}
</script>
<style lang="scss" scoped>
.active {
  background: #ccc;
}
.movie-content {
  width: 100%;
  background: rgb(6, 116, 110);
}
.nav {
  width: 100%;
  height: .8rem;
  background: #eee;
  position: sticky;
  left:0;
  top:0;
  z-index: 2;
  display: flex;
  span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
}
.sec{
  width: 90%;
  height: 2rem;
  background: #eee;
  border-radius: 10px;
  margin: 5px auto;
}
</style>
