<template>
  <div class="cart">
    <hr />
    <h1>购物车</h1>
    <img :src ="imgSrc" alt="">
    <CartTestComponent>
      <div class="box" slot="one">中秋节</div>
      <div class="box" slot="two">国庆节</div>
    </CartTestComponent>

    <MaskComponent v-show="isDialog">
      <h3>庆祝国庆节</h3>
      <div class="content">国庆节去哪玩</div>
      <button @click="sureBtn">确定</button>
      <button @click="closeBtn">取消</button>
    </MaskComponent>
  </div>
</template>
<script>
import CartTestComponent from "../components/testCart/index"
import MaskComponent from "../components/Dialog/index"
// import testImg from '../assets/logo.png'
export default {
  data() {
    return {
      testMsg: "<h2>国庆节大阅兵</h2>",
      isDialog: false,
      // testImg: testImg,
      imgSrc: ''
    }
  },
  components: {
    CartTestComponent,
    MaskComponent,
    
  },
  computed: {
    list() {
      return this.$store.state.cartList
    }
  },
  created() {
    this.$axios.get('/static/chuizi.json').then(res => {
      this.imgSrc = '/static/' + res.data.imgsrc
    })
    var arr = this.list.filter(item => {
      return item.isCart;
    })
  },
  mounted() {},
  watch: {},
  methods: {
    sureBtn() {
      this.isDialog = false;
    },
    closeBtn() {
      console.log("closeBtn")
    },
    addEvent() {},
    removeEvent() {}
  }
};
</script>
<style lang="scss">
img {
  width: 200px;
  height: 200px;  
}
.cart {
  padding: 40px;
}
.testImg {
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
