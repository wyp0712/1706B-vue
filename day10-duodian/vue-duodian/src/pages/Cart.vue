<template>
  <div class="about">
     <div v-for="(item, index) in cartList" :key="index">
       <span> {{item.name}}</span> :
       <span> {{item.count}} </span>
     </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  created() {},
  computed: {
    cartList () {
      return this.$store.state.cartData
    }
  }
}
</script>
