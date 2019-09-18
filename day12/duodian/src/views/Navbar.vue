<template>
  <div class="view-container">
     <div class="header-bar">
     </div>
     <div class="main">
       <router-view></router-view>
     </div>
    <div class="footer-bar">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="apps-o"
          replace
          to="/home"
        >首页</van-tabbar-item>
        <van-tabbar-item icon="search"
          replace
          to="/classify"
        >分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o"
          replace
          to="/vip"
        >vip</van-tabbar-item>
        <van-tabbar-item icon="setting-o"
          replace
          to="/cart"
        >购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o"
          replace
          to="/mine"
        >我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
   data() {
     return {
       active: 0
     }
   }
}
</script>
<style lang="scss">
  .view-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header-bar {
    width: 100%;
    height: 45px;
  }
  .main {
    flex:1;
    width: 100%;
    overflow: auto;
  }
  .footer-bar {
    width: 100%;
    height: 45px;
  }
</style>
