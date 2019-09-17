<template>
  <div class="about">

    <!-- <InputComponent class="aa" /> -->

    <div  v-for="(item, index) in cartList" :key="index">
      <span class="name"> {{item.name}}</span>
      <span class="add" @click="addCartEvent(item, index)">+</span>
      <span class="count">{{item.count}}</span>
      <span class="remove" @click="removeCartEvent(item, index)">-</span>
    </div>
  </div>
</template>
<script>
import InputComponent from './inputtest.vue'
export default {
  name: 'cart',
  created() {},
  components: {
    InputComponent
  },
  computed: { // 在计算属性中，可以定义数据
    cartList () {
      return this.$store.state.cartData
    }
  },
  methods: {
    addCartEvent(item, index) {
      this.$store.commit('addCart', index) 
    },
    removeCartEvent(item, index) {
      this.$store.commit('removeCart', index) 
    }
  }
}
</script>
<style lang="scss">
 .about {
   padding: 10px;
 }
  .add, .remove, .count {
    margin: 0 10px;
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color:#fff;
    background: #000;
    color:#fff;
    text-align: center;
    line-height: 35px;
    font-size: 35px;
  }
  .count {
    font-size: 25px;
  }
  .name {
    display: inline-block;
    width: 180px;
    line-height: 35px;
    background: #eee;
    // display: flex;
    
  }
</style>
