<template>
  <div class="router-bar">
    <router-link to="/">home</router-link>
    <router-link to="/project">project</router-link>
    <router-link to="/fans">fans</router-link>
  </div>
</template>

<style lang="scss">
.router-bar {
  width: 100%;
  height: 45px;
  display: flex;
  a {
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
  }
}

</style>