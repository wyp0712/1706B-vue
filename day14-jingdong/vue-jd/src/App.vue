<template>
  <div id="app">
    <header></header>
    <main>
      <router-view />
    </main>

    <footer class="footer" v-show="showRouterFlag">
      <router-link to="/">home</router-link>
      <router-link to="/classify">classify</router-link>
      <router-link to="/about">cart</router-link>
      <router-link to="/vip">vip</router-link>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showRouterFlag: true
    }
  },
  watch: { // 监听路由变化 实现导航效果显示隐藏
    $route (to, from) {
       console.log(to, 'to')
       if (to.path === '/about') {
         this.showRouterFlag = false
       } else {
         this.showRouterFlag = true
       }
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/style/reset.css');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 45px;
  background: red;
}
main {
  width: 100%;
  flex:1;
  overflow: auto;
}
.footer {
    width: 100%;
  height: 45px;
  background: red;
  display: flex;
  a{ 
    flex:1;
  }
}
</style>
