<template>
  <div id="app">
     

    <div class="main">
       <router-view></router-view>
    </div>
    <FooterBar /> 

  </div>
</template>
<script>

import FooterBar from './components/FooterBar/index'
export default {
  components: {
    FooterBar
  }
}
</script>

<style lang="scss">
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
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  flex:1;
  overflow: auto;
}

</style>
