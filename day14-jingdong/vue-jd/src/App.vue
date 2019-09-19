<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .header {
    width: 100%;
    height: 45px;
    background: red;
    display: flex;
    span {
      flex: 1;
      .van-search {
        padding: 6px 12px;
        .van-search__content {
          border-radius: 25px;
        }
      }
      // text-align: center;
      // line-height: 55px;
      // font-size: 25px;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      &:nth-child(2) {
        flex: 6;
      }
    }
  }
}
</style>
