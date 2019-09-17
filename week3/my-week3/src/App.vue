<template>
  <div id="app">
    <RouterBar ></RouterBar>
    <router-view/>
  </div>
</template>

<script>
import RouterBar from './components/RouterBar/index'
export default {
  components: {
    RouterBar
  }
}
</script>

<style lang="scss">
@import url('./assets/style/reset.css');
*{
  user-select: none;
}
html,body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
