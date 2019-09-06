<template>
  <div id="app">
    <HeaderBar />

    <div class="app-main">
      <div class="content">
        <router-view />
      </div>
    </div>

    <FooterBar />
      <!--  @closeMaskEvent @clickCheckMask 自定义事件，用来让子组件触发的事件 -->
      <!-- <DialogComponent v-show="isShowMask" @closeMaskEvent="closeMaskFn" @clickCheckMask="parentFn" :checkList = "checkList"/> -->
      <!-- 渲染子组件传递过来的数据 v-show判断状态，只渲染选中的数据 -->
      <!-- <h1 v-show="item.state" v-for="(item, index) in childMaskList" :key="index"> {{item.title}}</h1> -->
      <!-- 调用蒙层按钮 -->
      <!-- <button @click="showMask">点击出蒙层</button> -->
  </div>
</template>
<script>
// 父子传值
// import DialogComponent from './components/Dialog/index.vue'
import FooterBar from './components/FooterBar/FooterBar'
import HeaderBar from './components/HeaderBar/headerBar'
export default {
  data () {
    return {
      isShowMask: false, // 控制蒙层状态
      checkList: [
        {
          title: '平菇片1',
          state: false
        },
        {
          title: '平菇片2',
          state: false
        },
        {
          title: '平菇片3',
          state: false
        },
        {
          title: '平菇片4',
          state: false
        }
      ],
      childMaskList: []
    }
  },
  components: {
    HeaderBar,
    FooterBar
  },
  created () {
    // 调用函数
    this.parentFn()
    this.closeMaskFn()
  },
  watch: {
  },
  methods: {
    parentFn (v) {
      this.childMaskList = v
    },
    // 监控关闭蒙层
    closeMaskFn (v) {
      this.isShowMask = false
    },
    // 显示调用蒙层
    showMask () {
      this.isShowMask = true
    }
  }
}
</script>

<style lang="scss">
@import url('./assets/iconfont/iconfont.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.app-main {
  width: 100%;
  flex:1;
  overflow: auto;
  .content {
    width: 100%;
  }
}
</style>
