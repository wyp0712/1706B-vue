<template>
  <div class="footer-header">
    <ul>
      <router-link to="/">
        <li class="iconfont">&#xe621;</li>
        <li>主页</li>
      </router-link>
    </ul>
    <ul>
      <router-link to="/classify">
        <li class="iconfont">&#xe621;</li>
        <li>分类</li>
      </router-link>
    </ul>
     <ul>
      <router-link @click="broadCast" to="/shopcart">
        <li class="iconfont">&#xe621;</li>
        <li>购物车{{goodsList.length}}</li>
      </router-link>
    </ul>
     <ul>
      <router-link to="/PersonalCenter">
        <li class="iconfont">&#xe621;</li>
        <li>个人中心</li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import EventBus from '../../EventBus/bus'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  watch: {
    goodsList () {
      this.broadCast()
    }
  },
  created () {
    // console.log(this.goodsList, 'footer-------------bar')
    this.getBusData()
    this.broadCast()
  },
  methods: {
    getBusData () {
      EventBus.$on('shopCart', data => {
        this.goodsList.push(data)
      })
    },
    broadCast () {
      EventBus.$emit('footerBroadCast', this.goodsList)
    }
  }
}
</script>
<style lang="scss">
// 当前在1倍图中量到的距离 * 2 然后小数点往前移动两位，并且单位改为rem
  .footer-header{
    width: 100%;
    height: .8rem;
    border-top: 1px solid black;
    display: flex;
    ul {
      flex:1;
      text-align: center;
      line-height: .4rem;
    }
  }
</style>
