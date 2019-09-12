<template>
  <div>

    <h3>我是购物车的子组件</h3>

    <slot name="one"></slot>  
    <slot name="two"></slot>

  </div>
</template>
<script>
export default {
  props: {
    testMsg: String
  },
  data() {
    return {}
  },
  created() {
    // console.log(this.testMsg, 'testMsg')
  },
}
</script>