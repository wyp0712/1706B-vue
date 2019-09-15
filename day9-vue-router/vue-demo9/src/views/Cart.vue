<template>
  <div class="cart">
    <hr />

    <div v-for="(item, index) in list" :key="index">
      {{item.count}} {{item.name}}
    </div>  

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
