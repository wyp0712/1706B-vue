<template>
  <div>
    <HeaderBar />
    购物车
    <hr>
    <CartComponent />
    <div v-for="(item,index) in goodsItem" :key="index">{{item.nm}}</div>
    <hr>
  </div>
</template>
<script>
import EventBus from '../EventBus/bus'
import HeaderBar from '../components/HeaderBar/index'
import CartComponent from '../components/Cart/index'
export default {
  data () {
    return {
      goodsItem: []
    }
  },
  components: {
    HeaderBar,
    CartComponent
  },
  watch: {
    goodsItem () {
      this.testFn()
    }
  },
  created () {
    // this.getGoodsItem()
    this.testFn()
  },
  methods: {
    /**
     * @param getGoodsItem 通过eventbus 监听事件，获取数据
    */
    getGoodsItem () {
      // EventBus.$on('shopCart', this.testFn)
    },
    testFn (newVal) {
      EventBus.$on('footerBroadCast', res => {
        console.log(res, 'res---------------------footerBroadCast')
        this.goodsItem = res
      })
    }
  }
}
</script>
