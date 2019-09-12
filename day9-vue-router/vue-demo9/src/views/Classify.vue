<template>
  <div>
     <button @click="animateEvent()">点击实现动画</button>
    
    <transition name="bounce">
      <div class="box" v-if="isShow">
        <h1>hello world</h1>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return  {
      isShow: true
    }
  },
  methods: {
    animateEvent() {
      this.isShow = !this.isShow
    }
  },
}
</script>
<style lang="scss">

.bounce-enter-active, .bounce-leave-active {
  animation: bounceStyle 1s infinite;
}

@keyframes bounceStyle {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

</style>