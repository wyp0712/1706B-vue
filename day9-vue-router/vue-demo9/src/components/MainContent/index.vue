<template>
  <div class="main" ref="mainBox">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    //   所有基于dom操作的代码必须放在mounted这个生命周期中；
    console.log(this.$refs.mainBox)
    const MainBox = this.$refs.mainBox;
    const inputBox = document.querySelector('.inputBox')
    MainBox.addEventListener('scroll', (e) => {
      let sTop = MainBox.scrollTop
      if (sTop >= 0) {
        inputBox.classList.add('fixed')
      } else {
        inputBox.classList.remove('fixed')
      }
    })
    
  }
}
</script>
<style lang="scss">
  .fixed {
    position: fixed;
    left:0;
    top:0;
  }
</style>