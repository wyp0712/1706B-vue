<template>
  <div id="app">
    <div class="app-header">
      <HeaderBar :headerMsg = "headerMsg" />
    </div>
    <div class="app-main">
      <MainContent />
    </div>
    <div class="app-footer">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/header/Header'
import MainContent from './pages/main/MainContent'
import FooterBar from './components/footer/FooterBar'
// 组件通讯  父 - 子组件 子 - 父组件 兄 - 弟组件
export default {
  name: 'app',
  data() {
    return {
      headerMsg: '世界杯'
    }
  },
  // 组件对象 引入的组件 要在此对象中注册才能使用
  components: {
    HeaderBar,
    MainContent,
    FooterBar
  },
  created() {
    this.$axios.get('/getMovieList').then(res => {
      console.log(res, 'res')
    })
  }
}
</script>

<style lang="scss">
@import url('./assets/iconfont/iconfont.css');
// lang 语言声明  scss

html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.app-header {
  width: 100%;
  height: 45px;
  background: red;
}

.app-main {
  flex: 1;
  width: 100%;
  overflow: auto;
}

.app-footer {
  width: 100%;
  height: 45px;
  background: red;
}
</style>
