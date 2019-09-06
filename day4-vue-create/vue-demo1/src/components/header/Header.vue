<template>
  <div class="header">
    <button class="btn-slide iconfont" @click="btnClick">&#xe755;点击下拉</button>
    
    <div class="slide-down" :class="{active: isActive}">
      <ul>
        <li>{{headerMsg}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { constants } from 'crypto'
export default {
  props: ['headerMsg'],
  data() {
    return {
      isActive: true
    }
  },
  created() {
    console.log(this.headerMsg, 'headerMsg, 我是子组件中的消息')
  },
  methods: {
    btnClick() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
}

.slide-down {
  width: 100%;
  height: 400px;
  background: #000;
  // opacity: .5;
  position: absolute;
  left: 0;
  top: 45px;
  color:#fff;
  transition: height .5s;
}
.active {
  height: 0;
  overflow: hidden;
}
</style>
