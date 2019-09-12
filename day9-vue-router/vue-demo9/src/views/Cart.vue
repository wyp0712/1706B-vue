<template>
  <div class="cart">
    <hr />
    <h1>购物车</h1>

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
import CartTestComponent from "../components/testCart/index";
import MaskComponent from "../components/Dialog/index";
export default {
  data() {
    return {
      testMsg: "<h2>国庆节大阅兵</h2>",
      isDialog: false
    };
  },
  components: {
    CartTestComponent,
    MaskComponent
  },
  computed: {
    list() {
      return this.$store.state.cartList;
    }
  },
  created() {
    console.log(this.list, "list");
    var arr = this.list.filter(item => {
      return item.isCart;
    });
    console.log(arr, "arr");
    // console.log(this.$store.state.cartList)
  },
  mounted() {},
  watch: {},
  methods: {
    sureBtn() {
      console.log(2);
      this.isDialog = false;
    },
    closeBtn() {
      console.log("closeBtn");
    },
    addEvent() {},
    removeEvent() {}
  }
};
</script>
<style lang="scss">
.cart {
  padding: 40px;
}
</style>
