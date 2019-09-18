<template>
  <div class="cart">
     <!-- <dl class="cart-item" v-for="(item, index) in cartGoods" :key="index">
      <dt><img :src="item.image" alt=""></dt>
      <dd>{{item.label}} </dd>
      <dd class="remove-btn" @click="removeGoods(item, index)">-</dd>
      <dd class="inner">{{item.count}}</dd>
      <dd class="add-btn" @click="addGoods(item, index)">+</dd>
     </dl> -->
      <van-card v-for="(item, index) in cartGoods" :key="index"
          :num="item.count"
          price="2.00"
          desc="描述信息"  
          :title="item.label"
          :thumb="item.image"
        >
          <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini" @click="addGoods(item, index)">+</van-button>
            <van-button size="mini" @click="removeGoods(item, index)">-</van-button>
          </div>
      </van-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'cart',
  data() {
    return {
      arr: [],
      count: '',
      list: {
        a: 1
      }
    }
  },
  // Vue 不能检测到对象属性的添加或删除。
  // 由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的。
  watch: {
    // cartCount(v) {
    //   console.log(v, 'v')
    // },
    // cartCount: {
    //   handler(newV, oldV) {
    //     console.log(newV, 'v-----------------v') 
    //   },
    //   // deep: true,
    //   // immediate: true
    // }
  },
  computed: {
    cartCount() {
      return this.$store.state.num
    },
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
.van-card {
  width: 100%;
}
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
