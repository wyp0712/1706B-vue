<template>
  <div class="home-wrap">
    <SwiperComponent />
    <div class="home-content">
      <dl class="home-item" @click="bindClick(item, index)" v-for="(item, index) in list" :key="index">
        <dt> <img :src="item.image" alt=""></dt>
        <dd>{{item.title}}</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import SwiperComponent from '../Swiper/index'
export default {
  props: {
    bookList: Array, // propTypes
    require:true,
    default: ['hello world']  // defaultProps
  },
  data() {
    return {
      list: [] 
    }
  },
  components: {
    SwiperComponent
  },
  methods: {
    bindClick(item, index) {
      this.$router.push({
        name: `detail`,
        params: {
          item: item
        }
      })
      localStorage.setItem('detail', JSON.stringify(item))
    }
  },
  watch: {
    bookList(v) {
      console.log(v, 'v')
      this.list = v
    }
  },
  created() {
    console.log(this.bookList, 'home-----list')
  },
}
</script>
<style lang="scss">
  .home-content {
    width: 94%;
    display: flex;
    flex-wrap: wrap;
    padding: 3%;
    .home-item {
      width: 100%;
      height: 120px;
      border-bottom: 1px solid black;
      display: flex;
      margin: 5px;
      dt {
        flex:1;
        img {
          width: 80%;
          height: 100%;
        }
      }
      dd {
        flex:1;
      }
    }
  }
</style>