<template>
  <div>
     movieLeft
     <div class="content-list" @click="bindAddEvent(item)" v-for="(item, index) in leftArr" :key="index">{{item.nm}}</div>
  </div>
</template>
<script>
import EventBus from '../../EventBus/bus'
export default {
  props: [
    'childMsgMovie'
  ],
  data () {
    return {
      leftArr: []
    }
  },
  created () {
    this.leftArr = this.childMsgMovie
  },
  watch: {
    // 如果axios请求传递过来的数据，必须用watch监听数据，并且渲染
    childMsgMovie (v) {
      this.leftArr = v
    }
  },
  methods: {
    /**
     * @param bindAddEvent 绑定添加货物事件，并且把货物信息传递给购物车组件
     */
    bindAddEvent (item) {
      EventBus.$emit('shopCart', item)
    }
  }
}
</script>
<style lang="scss">
  .content-list {
    width: 90%;
    height: 4rem;
    margin: 5px auto;
    background: lightblue;
  }
</style>
