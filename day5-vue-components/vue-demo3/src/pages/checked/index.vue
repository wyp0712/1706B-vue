<template>
  <div class="box">
    <input v-model="totalCheckState" type="checkbox" @click="TotalCheckClick()"> 全选
    <span v-for="(item, index) in list" :key="index">
      <input type="checkbox" v-model="item.state" @click="bindChildClick(item)"> {{ item.fruit }}
    </span>

    <div class="click" @click.stop.prevent="doClick($event)">我是eventbus测试按钮</div>

  </div>
</template>
<script>
import EventBus from '../../event-bus.js'
export default {
  data () {
    return {
      totalCheckState: false,
      list: [
        {
          fruit: 'apple',
          state: false
        },
        {
          fruit: 'banana',
          state: false
        },
        {
          fruit: 'orange',
          state: false
        },
        {
          fruit: 'pineapple',
          state: false
        }
      ]
    }
  },
  watch: {

  },
  methods: {
    doClick () {
      EventBus.$emit('getTarget', event.target)
    },
    TotalCheckClick () {
      this.totalCheckState = !this.totalCheckState
      this.list.map(item => {
        item.state = this.totalCheckState
      })
    },
    bindChildClick (item) {
      item.state = !item.state
      this.totalCheckState = this.list.every(item => {
        return item.state
      })
    }
  }
}
</script>
<style lang="scss">
  input[type=checkbox] {
    display: inline-block;
    // width: 80px;
    // height: 80px;
    border:1px solid black;
  }
</style>
