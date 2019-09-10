<template>
  <div class="home">
     
     <ul @click="bindDetailEvent(item)" v-for="(item, index) in listData" :key="index">
       <li>
         <img :src="item.images" alt="">
         <span>{{item.skuMobileTitle}}</span>
       </li>
     </ul>

     <FooterBar />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import SwiperComponents from '../components/Swiper/index'
import FooterBar from '../components/FooterBar/index.vue'
export default {
  name: 'home',
  data () {
    return {
      listData: []
    }
  },
  components: {
    FooterBar
  },
  watch: {
  },
  created () {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get('/api/list').then(res => {
        this.listData = res.data.list.data.skuInfo
      })
    },
    bindDetailEvent(item) {
      // 路由跳转  动态路由跳转
      this.$router.push({
        path: `/detail/${item.skuId}`
      })
    }
  },
}
</script>
<style lang="scss">
  .home {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    ul {
      width: 42%;
      height: 100px;
      margin: 5px 8px;
      // background: #eee;
      padding: 1%;
      border:1px solid #eee;
      li {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 80%;
        }
      }
    }
  }
</style>
