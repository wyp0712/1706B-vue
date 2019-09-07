<template>
  <div class="cart-list">
      {{msg}}
  </div>
</template>
<script>
import EventBus from '../../EventBus/bus'
export default {
  props: ['goodsItem'],
  data () {
    return {
      msg: []
    }
  },
  watch: {
    msg () {
      this.msg = this.goodsItem
    }
  },
  created () {
    console.log(this.goodsItem, 'this.goodsItem-------cart')
    this.msg = this.goodsItem
    this.getData()
  },
  methods: {
    getData () {
      EventBus.$on('footerBroadCast', (list) => {
        console.log(list, 'cart组件')
        this.msg = list
      })
    }
  }
}
</script>
