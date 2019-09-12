<template>
  <div class="cart">
     购物车

  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    list() {
      return this.$store.state.cartList
    }
  },
  created() {
    console.log(this.list, 'list')
   var arr = this.list.filter(item => {
      return item.isCart
    })
    console.log(arr, 'arr')
    // console.log(this.$store.state.cartList)

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    addEvent() {

    },
    removeEvent() {

    }
  }
}
</script>
<style lang="scss">
  .cart {
    padding: 40px;
  }
</style>
