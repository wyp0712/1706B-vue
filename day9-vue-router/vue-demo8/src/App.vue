<template>
  <div id="app">
    <div class="main">
      <router-view/>
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
*{
  list-style: none;
  margin: 0;
  padding: 0;
}
html,body {
  width: 100%;
  height: 100%;
}
html {
  font-size: calc(100 / 750 * 100vw);
}
#app {
  width: 100%;
  height: 100%;
  list-style: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  flex:1;
  overflow: auto;
}
.footer {
  width: 100%;
  height: .8rem;
  background: #ccc;
}
</style>
