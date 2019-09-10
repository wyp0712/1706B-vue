<template>
  <div class="footer">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/classify">classify</router-link>
    <router-link to="/cart">cart</router-link>
  </div>
</template>

<style lang="scss">
  .footer {
   width: 100%;
   height: .8rem;
   display: flex;
   a {
     flex:1;
     display: flex;
     justify-content: center;
     align-items: center;
   }
  }
</style>