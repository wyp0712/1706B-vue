<template >
  <div id="app">
    <SwiperComponent />
    <TabComponent />
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SwiperComponent from '@/components/Swiper.vue'
import TabComponent from '@/page/Tab/Tab.vue'
export default {
  // 初始化数据仓库
  data() {
    return {
      msg: "msg test"
    }
  },
  components: {
    HelloWorld,
    SwiperComponent,
    TabComponent
  },
  created() {
    // console.log(this.$axios)
    this.$axios.get('/movie/list').then(res => {
      console.log(res.data, 'res')
    })
  },
}
</script>
<style>
#app {
  padding: 60px;
  color:navy;
  font-size: 40px;
}
</style>