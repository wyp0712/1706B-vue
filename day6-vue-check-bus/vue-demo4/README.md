# vue-demo4

弹出框组件： 

   5到10个复选框选项：

    选中每一个的时候，传递给父元素，并且显示出来，不选中的时候，父元素也不展示；


兄弟组件：两个组件没有互相的引用

定义一个bus.js

import Vue from 'vue'
export default new Vue()

把这个文件分别引到两个组件中

1. 
import EventBus from 'bus.js'
// 触发事件
EventBus.$emit('事件名', msg)  // msg就是你要传第的消息

2. 
import EventBus from 'bus.js'
EventBus.$on('事件名', res => {  // res就是你接收到的消息
  console.log(res)
})

3. 事件名称在两个组件中要保持一致；
