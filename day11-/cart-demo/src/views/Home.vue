<template>
  <div class="home">
     <!-- <dl class="home-item" v-for="(item, index) in classifyList" :key="index">
       <dt><img :src="item.image" alt=""></dt>
       <dd>{{item.label}} </dd>
       <dd class="add-btn" @click="addEvent(item, index)">+</dd>
     </dl> -->
     <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg" alt="">
          </van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
     </div>
    
    <div class="icon-box">
      <van-grid>
        <van-grid-item icon="home-o" text="文字" />
        <van-grid-item icon="search" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>
     
     <van-card v-for="(item, index) in classifyList" :key="index"
      price="2.00"
      :title="item.label"
      :thumb="item.image"
      @click="bindDetail(item, index)"
    />


  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      classifyList: []
    }
  },
  components: {
  },
  created() {
    this.getClassifyData()
  },
  methods: {
    bindDetail(item, index) {
      // 1 url后面带参数 
      //  this.$router.push({
      //    path: '/detail',
      //    query: {
      //      index: 0
      //    }
      //  })

      //  2. name 属性带参数 params
      this.$router.push({
        name: 'detail',
        params: {
          item,
          index
        }
      })
      


      // this.$router.push({
      //   name: 'detail',
      //   params: {
      //     item: item,
      //     index: index
      //   }
      // })
    },
    addEvent(item, index) {
      this.$store.commit('changeNum', 100)  
      this.$store.commit('toCart', item)
    },
    async getClassifyData() {
      const result = await this.$axios.get('/api/classify', 
        {
          params: {
          type: 0
        }
      })
      this.classifyList = result.data.data
      console.log(this.classifyList)
    }
  }
}
</script>
<style lang="scss">
.home {
  width: 95%;
  padding: 2.5%;
  display: flex;
  flex-wrap: wrap;
  .swiper {
    width: 100%;
    height: 200px;
  }
  .icon-box {
    width: 100%;
  }
  .van-card {
  // width: 100%;
    width: 45%;
    padding: 2.5%;
    margin: 2%;
    position: relative;
    dt {
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      text-align: left;
      line-height: 25px;
    }
    .add-btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #000;
      color:#fff;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      position: absolute;
      right: 18%;
      bottom: 30%;
    }
  }
}
</style>
