<template>
  <div class="project-bar">
    <router-link to="/project/collect">collecct</router-link>
    <router-link to="/project/takePart">takePart</router-link>
  </div>
</template>

<style lang="scss">
.project-bar {
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

