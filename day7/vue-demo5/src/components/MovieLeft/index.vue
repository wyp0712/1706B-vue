<template>
  <div class="box">
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
      leftArr: [],
      list: [],
      num: 0
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
      if (window.localStorage.cart) {
        this.list = JSON.parse(window.localStorage.getItem('cart'))
      }
      this.list.push(item)
      EventBus.$emit('shopCart', this.list)
      window.localStorage.setItem('cart', JSON.stringify(this.list))

      this.$router.push({
        path: `/detail/${item.id}`
      })
    }
  }
}
</script>
<style lang="scss">
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .content-list {
    width: 40%;
    margin: 5px 2.5%;
    height: 4rem;
    margin: 5px auto;
    background: lightblue;
  }
}

</style>
