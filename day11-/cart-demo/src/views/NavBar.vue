<template>
  <div class="view-container">
      
      <div class="header">
        <van-nav-bar
          title="标题"
          left-text="返回"
          right-text="按钮"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>

     <div class="main">
       <router-view class="Router"></router-view>
     </div>

     <div class="footer-bar">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o"
          replace
          to="/home"
          dot
        >首页</van-tabbar-item>
        <van-tabbar-item icon="search"
          replace
          to="/cart"
          :info="totalNum"
        >购物车</van-tabbar-item>
        <!-- <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
      </van-tabbar>
     </div>


  </div>
</template>
<script>
/* 
 1. 想让 home  cart 页面 显示到navBar中的router-view中
 2. 方法就是让home cart的路由变成navbar 的二级路由
*/

import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    totalNum () {
      return this.$store.getters.totalNum
    }
  },
  created() {

  },
  methods: {
    onClickLeft() {
      this.$toast('提示文案');
    },
    onClickRight() {
      this.$toast('提示文案');
    }
  },
}
</script>
<style lang="scss">
.view-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 45px;
}
.main {
  flex:1;
  overflow: auto;
}
 .footer-bar {
   width: 100%;
   height: 45px;
   display: flex;
   a {
     flex:1;
     display: flex;
     justify-content: center;
     align-items: center;
   }
 }  
</style>