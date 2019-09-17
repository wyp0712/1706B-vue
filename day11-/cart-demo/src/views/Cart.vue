<template>
  <div class="cart">
     <dl class="cart-item" v-for="(item, index) in cartGoods" :key="index">
      <dt><img :src="item.image" alt=""></dt>
      <dd>{{item.label}} </dd>
      <dd class="remove-btn" @click="removeGoods(item, index)">-</dd>
      <dd class="inner">{{item.count}}</dd>
      <dd class="add-btn" @click="addGoods(item, index)">+</dd>
     </dl>
  </div>
</template>

<script>

export default {
  name: 'cart',
  data() {
    return {
      arr: []
    }
  },
  computed: {
    cartGoods () {
      return this.$store.state.cartarr
    }
  },
  created() {

  },
  methods: {
    addGoods(item, index) {
      this.$store.commit('addGoods', index)
    },
    removeGoods(item, index) {
      this.$store.commit('removeGoods', index)
    }

  }
}
</script>
<style lang="scss">
.cart {
  width: 95%;
  padding: 2.5%;
  display: flex;
  flex-wrap: wrap;
  .cart-item {
    width: 100%;
    padding: 2.5%;
    position: relative;
    background: #eee;
    margin: 5px;
    dt {
      width: 120px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      text-align: left;
      line-height: 25px;
    }
    .add-btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      position: absolute;
      right: 43%;
      bottom: 30%;
    }
    .inner {
      width: 30px;
      height: 30px;
      /* border-radius: 50%; */
      // background: #e8c6c6;
      // color: #fff;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      position: absolute;
      right: 30%;
      bottom: 31%;
    }
    .remove-btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      position: absolute;
      right: 18%;
      bottom: 30%;
    }
  }
}
</style>
