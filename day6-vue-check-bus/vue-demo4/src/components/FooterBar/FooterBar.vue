<template>
  <div class="app-footer">
     <ul>
      <router-link to='/'>
        <li class="iconfont">&#xe755;</li>
        <li> 首页 </li>
      </router-link>
     </ul>
     <ul>
      <router-link to='/about'>
        <li class="iconfont">&#xe755;</li>
        <li> 分类 </li>
      </router-link>
     </ul>
     <ul>
       <router-link to='/shopcart'>
          <li class="iconfont">&#xe755;</li>
          <li> 购物车</li>
       </router-link>
     </ul>
     <ul>
       <router-link to='/swiper'>
          <li class="iconfont">&#xe755;</li>
          <li> 个人中心</li>
       </router-link>
     </ul>

  </div>
</template>
<script>
import Bus from '../../Eventbus/bus.js'
export default {
  data () {
    return {}
  },
  created () {
    this.clickChild()
  },
  methods: {
    clickChild (v) {
      Bus.$on('clickChild', res => {
        console.log(res, 'res------我在footerbar组件中监听')
      })
    }
  }
}
</script>
<style lang="scss">
.app-footer {
  width: 100%;
  height: calc(.4rem * 2);
  display: flex;
  border-top:1px solid black;
  ul {
    flex:1;
    text-align: center;
    line-height: 20px;
    a {
       li {
        font-size: 12px;
        &:nth-child(1) {
           font-size: 20px;
        }
       }
    }
  }
}
</style>
