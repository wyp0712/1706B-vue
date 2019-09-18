<template>
  <div class="detail">

     <div class="goodItem">

         <img :src="detailItem.image" alt=""> 
        <p> {{detailItem.label}} </p>

     </div> 


   <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked($route.params.item, $route.params.index)"
    />

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" :info="totalNum" />
        <!-- <van-goods-action-icon icon="shop-o" text="店铺" info="12" /> -->
        <van-goods-action-button type="warning" @click="toCartRouter()" text="加入购物车" />
        <van-goods-action-button @click="toCartItem()" type="danger" text="立即购买" />
      </van-goods-action>

  </div>
</template>
<script>
export default {
  name: 'detail',
  data() {
    return {
      detailItem: {},
      show: false,
      sku: {
         tree: [
                {
                  k: '颜色', // skuKeyName：规格类目名称
                  v: [
                    {
                      id: '30349', // skuValueId：规格值 id
                      name: '红色', // skuValueName：规格值名称
                      imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                    },
                    {
                      id: '1215',
                      name: '蓝色',
                      imgUrl: 'https://img.yzcdn.cn/2.jpg'
                    }
                  ],
                  k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                }
              ],
        // 数据结构见下方文档
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
      },
      goods: {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: ''
      }
    }
  },
  created() {
    console.log(this.$route.params.item)
    this.goods = {
      title: this.$route.params.item.label,
      picture: this.$route.params.item.image
    }
    // console.log(this.$route.params.item, 'poarsm')
    this.detailItem = this.$route.params.item
    // this.goods = this.$route.query
    // console.log(this.$route)
    // this.detailItem = this.$route.query
    // console.log(this.detailItem, 'detailItem')
  },
  computed: {
    totalNum () {
      return this.$store.getters.totalNum
    }
  },
  methods: {
    toCartItem() {
      this.show = true
    },
    onBuyClicked() {

    },
    onAddCartClicked(item, index) {
      this.$store.commit('toCart', item)
      this.show = false
    },
    toCartRouter() {
      this.$router.push({
        path: '/cart'
      })
    }
  },
}
</script>