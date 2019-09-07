<template>
  <div class="cart-list">
    <div v-for="(item,index) in msg" :key="index">{{item.nm}}</div>
  </div>
</template>
<script>
import EventBus from '../../EventBus/bus'
export default {
  // props: ['goodsItem'],
  data () {
    return {
      msg: []
    }
  },
  watch: {
  },
  created () {
    if (window.localStorage.cart) {
      this.msg = JSON.parse(window.localStorage.getItem('cart'))
    }
  },
  methods: {
    getData () {
    }
  }
}
</script>
<style lang="scss" scoped>
  .cart-list {
    width: 100%;
    height: 200px;
  }
</style>
