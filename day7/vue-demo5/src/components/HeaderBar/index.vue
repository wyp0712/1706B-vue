<template>
  <div class="app-header">
     <span class="iconfont">&#xe6b8;</span>
     <span>分类</span>
     <span class="iconfont">&#xe63d;</span>
  </div>
</template>
<style lang="scss">
// 当前在1倍图中量到的距离 * 2 然后小数点往前移动两位，并且单位改为rem
  .app-header{
    width: 100%;
    height: .8rem;
    border-bottom: 1px solid black;
    display: flex;
    span {
      flex:1;
      text-align: center;
      line-height: .8rem;
    }
  }
</style>
