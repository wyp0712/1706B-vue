<template>
  <div class="home">
    <h1 class="inputBox" ref="inputBox"> <input type="text" v-model="inputVal"> </h1>
    <template v-if="!inputVal">
      <ul @click="bindDetailEvent(item)" v-for="(item, index) in listArr" :key="index">
        <li>
          <img :src="item.images" alt="">
          <span> {{ item.skuName }} </span>
        </li>
      </ul>
    </template>

    <template v-else>
      <ul @click="bindDetailEvent(item)" v-for="(item, index) in searchArr" :key="index">
        <li>
          <img :src="item.images" alt="">
          <span> {{ item.skuName }} </span>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
export default {
  name: 'homeComponents',
  data() {
    return {
      listArr: [],
      inputVal: '',
      searchArr: []
    }
  },
  components: {
  },
  computed: {
    storeList () {
      return this.$store.state.cartList
    }
  },
  created() {
    // this.$store.dispatch('getAjaxData')
    this.getData()
  },
  watch: {
    inputVal() {
      this.searchData()
    },
    storeList(v) {
      // this.listArr = v
    }
  },
  methods: {
    searchData() {
      this.searchArr = this.listArr.filter(item => {
        return item.skuName.includes(this.inputVal)
      })
      // console.log(this.searchArr, 'this.searchArr')
    },
    bindDetailEvent(item) {
     // 跳转详情页面
    //  this.$router.push({
    //    path: `/detail/${item.skuId}`
    //  })
      this.$store.commit('addFn', item)
    },
    getData() {
      // this.listArr = this.$store.state.cartList
      this.$axios('/api/list').then(res => {
        this.listArr = res.data.list.data.skuInfo
        this.listArr.forEach(item => {
          item.count = 0 // 当前购物车数量
          item.isCart = false // 当前是否加入购物车的状态
        })

        // this.$store.dispatch('getAjaxData', this.listArr)
      })
    }
  },
}
</script>
<style lang="scss">
  .home {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    h1 {
      width: 100%;
      input {
        width: 100%;
        height: 30px;
        border-radius: 10px;
        outline: none;
        padding-left: 5%;
        border:1px solid black;
      }
    }

    ul {
      width: 48%;
      height: 200px;
      text-align: center;
      img {
        width: 100%;
        height: 80%;
      }
    }
  }

</style>
