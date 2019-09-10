<template>
  <div class="home">
    <!-- swiper - 组件 -->
    <SwiperComponents />
    <!-- tab - 切换组件 -->
    <TabComponent :newsList="newsList"  @clickTab="parentFn" />
  </div>
</template>
<script>
/**
 * @param [父组件]  只负责传输数据   父子传数据 都是通过标签传数据
 * @param {getData}  请求数据函数  并且赋值给newlist 通过newlist 传递给子组件
 * @param {@clickTab="parentFn" 后面双引号中的parentFn就是当前子组件传递回来接收信息的函数。函数的参数就是你接受到的信息}
 */
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SwiperComponents from '../components/Swiper/index.vue'
import TabComponent from '../components/TabComponent/index.vue'
export default {
  name: 'home',
  data () {
    return {
      newsList: []
    }
  },
  components: {
    SwiperComponents,
    TabComponent
  },
  created () {
    // 默认渲染
    this.getData()
  },
  methods: {
    parentFn (v) {
      this.getData(v)
    },
    getData (type = 'home') {
      this.$axios.get('/api/getNewsList', {
        params: {
          type: type
        }
      }).then(res => {
        this.newsList = res.data.newsData
      })
    }
  }
}
</script>
<style lang="scss">
  .nav {
    width: 100%;
    display: flex;
    span {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .active {
    background: #ccc;
    color:red;
  }
  .content {
    width: 100%;
  }
</style>
