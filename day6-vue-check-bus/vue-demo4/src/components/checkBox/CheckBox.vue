<template>
  <div class="check-box">
    <input v-model="totalState" type="checkbox" @click="totalChecked"> 全选
    <span v-for="(item, index) in checkList"  :key="index"><input @click="itemChecked(item, index)"  v-model="item.state" type="checkbox"> {{item.title}} </span>
    <button @click="doClick">点击传第给兄弟组件</button>
  </div>
</template>
<script>
import Bus from '../../Eventbus/bus.js'
export default {
  data () {
    return {
      totalState: false,
      checkList: [
        {
          title: '苹果',
          state: false
        },
        {
          title: '李',
          state: false
        },
        {
          title: 'orange',
          state: false
        },
        {
          title: 'banana',
          state: false
        }
      ]
    }
  },
  methods: {
    totalChecked () {
      this.totalState = !this.totalState
      this.checkList.map(item => {
        item.state = this.totalState
      })
    },
    itemChecked (item, index) {
      item.state = !item.state
      this.totalState = this.checkList.every(item => {
        return item.state
      })
    },
    doClick () {
      Bus.$emit('clickChild', '我是checkbox组件的信息')
    }
  }
}
</script>
