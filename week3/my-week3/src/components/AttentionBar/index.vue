<template>
  <div class="attention-bar">
    <router-link to="/fans/attentionYou">我关注的人</router-link>
    <router-link to="/fans/attentionMe">关注我的人</router-link>

  </div>
</template>
<style lang="scss">
.attention-bar {
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