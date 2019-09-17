<template>
  <div class="home">
     <dl class="home-item" v-for="(item, index) in classifyList" :key="index">
       <dt><img :src="item.image" alt=""></dt>
       <dd>{{item.label}} </dd>
       <dd class="add-btn" @click="addEvent(item, index)">+</dd>
     </dl>
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
    addEvent(item, index) {
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
  .home-item {
    width: 45%;
    padding: 2.5%;
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
