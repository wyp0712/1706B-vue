<template>
  <div class="view-container">
     <div class="main">
       <router-view class="Router"></router-view>
     </div>

     <div class="footer-bar">
       <router-link to="/">首页</router-link>
       <router-link to="/cart">购物车{{totalNum}}</router-link>
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
    }
  },
  computed: {
    totalNum () {
      return this.$store.getters.totalNum
    }
  },
  created() {
    // console.log(this.$store)
  }
}
</script>
<style lang="scss">
.view-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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