<template>
  <div class="home">
    <div class="nav">
      <span @click="bindTabEvent(item, index)" :class="{active: item.state}" v-for="(item,index) in tabs" :key="index"> {{item.name}}</span>
    </div>
    <div class="content">
      <div v-for="(item, index) in listArr" :key="index">
        <span>{{item.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * @param { props } {对象形式可以限制newlist传递过来的数据类型}
 * @param { newsList } 因为newlist 是通过aja请求过来的数据，所以需要watch监听数据
 * @param { bindTanEvent } 在子组件中操作tab切换的点击事件 操作的同时要告诉父元素你点击的是什么，父元素通过你传递的信号（type），给你传递想要的数据
 * @param { this.$emit('事件名'， 传递的信息) 事件名字是指:当前在父组件中，标签上绑定的自定义事件}
 */
export default {
  name: 'TabComponent',
  props: {
    newsList: Array
  },
  data () {
    return {
      tabs: [
        {
          name: '首页',
          state: true,
          type: 'home'
        },
        {
          name: '国内',
          state: false,
          type: 'civil'
        },
        {
          name: '国际',
          state: false,
          type: 'internation'
        },
        {
          name: '历史',
          state: false,
          type: 'history'
        }
      ],
      tabIndex: 0,
      listArr: []
    }
  },
  watch: {
    newsList (v) {
      console.log(v, 'v--------tab----components')
      this.listArr = v
    }
  },
  methods: {
    bindTabEvent (item, index) {
      this.tabs[this.tabIndex].state = false
      item.state = true
      this.tabIndex = index
      this.$emit('clickTab', item.type)
    }
  }
}
</script>
<style lang="scss">
  .nav {
    width: 100%;
    display: flex;
    span {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .active {
    background: #ccc;
    color:red;
  }
  .content {
    width: 100%;
  }
</style>
