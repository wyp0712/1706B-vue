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
      <router-link to="/shopcart">
        <li class="iconfont">&#xe621;</li>
        <li class="cart-li">购物车 <span class="cart-tip">{{goodsList.length}}</span></li>
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
  },
  created () {
    this.getCartList()
    if (window.localStorage.cart) {
      this.goodsList = JSON.parse(window.localStorage.getItem('cart'))
    }
  },
  methods: {
    getCartList () {
      EventBus.$on('shopCart', res => {
        this.goodsList = res
      })
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
      //   padding: 30px;
        a {
          font-weight: bold;
          color: #2c3e50;
          &.router-link-exact-active {
            color: #42b983;
          }
        }
      .cart-li {
        position: relative;
        .cart-tip {
          position: absolute;
          right: 0.4rem;
          top: -0.4rem;
          text-align: center;
          line-height:.4rem;
          background: red;
          display: inline-block;
          width: .4rem;
          height: .4rem;
          border-radius: 50%;
          color:#fff;
          font-size: .12rem;
        }
      }
    }
  }
</style>
