<template>
  <div class="dialog-box">
     <div class="mask"></div>
     <div class="tip">
      <slot></slot>  
     </div> 
  </div>
</template>
<script>
export default {
   

}
</script>
<style lang="scss">
  .dialog-box {
    width: 100%;
    height: 100%;
    position: fixed;;
    left:0;
    top: 0;
    .mask {
      width: 100%;
      height: 100%;
      position: absolute;
      left:0;
      top:0;
      background: #000;
      opacity: .6;
    }
    .tip {
      width: 80%;
      height: 60%;
      background: #fff;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
