<template>
  <div id="app">
    <main class="main">
       <div class="content">
         <!-- router-view 这个就是配置好的路由的展示区域 -->
          <router-view/>
       </div>
    </main>

    <FooterBar />
  </div>
</template>
<script>
// import HeaderBar from './components/HeaderBar/index'
import FooterBar from './components/FooterBar/index'
export default {
  data () {
    return {}
  },
  components: {
    // HeaderBar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import url('./assets/style/reset.scss');
@import url('./assets/iconfont/iconfont.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  flex:1;
  overflow: auto;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
