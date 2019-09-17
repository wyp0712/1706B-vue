<template>
  <div class="footer">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About {{$store.state.cartData.length}}</router-link>
  </div>
</template>
<style lang="scss">
  .footer {
    width: 100%;
    height: 45px;
    display: flex;
    background: #ccc;
    a {
      flex:1;
      text-align: center;
      line-height: 45px;
    }
  }
</style>