<template>
  <div class="views-wrap">
    <div class="main">
      <router-view class="Router"></router-view>
    </div>
    <div class="footer-bar">
      <router-link to="/">首页</router-link>
      <router-link to="/cart">购物车</router-link>
    </div>
  </div>
</template>
<style lang="scss">
.views-wrap {
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
