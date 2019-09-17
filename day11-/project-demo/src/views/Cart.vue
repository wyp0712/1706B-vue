<template>
  <div class="cart">
    <dl class="cart-item" v-for="(item, index) in classifyList" :key="index">
      <dt>
        <img :src="item.image" alt />
      </dt>
      <dd>{{item.label}}</dd>
      <dd class="add-btn">+</dd>
      <dd class="inner"></dd>
      <dd class="remove-btn">+</dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classifyList: []
    }
  },
  created() {
    this.getAjaxData()
  },
  methods: {
    async getAjaxData() {
      const result = await this.$axios.get('/api/classify', {params: {
        type: 0
      }})
      this.classifyList = result.data.data
      console.log(this.classifyList)
    }
  },
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
    dt {
      width: 120px;
      height: 100px;
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
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      right: 43%;
      bottom: 30%;
    }
    .inner {
      width: 20px;
      height: 20px;
      /* border-radius: 50%; */
      background: #e8c6c6;
      color: #fff;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      right: 30%;
      bottom: 31%;
    }
    .remove-btn {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #000;
      color: #fff;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      position: absolute;
      right: 18%;
      bottom: 30%;
    }
  }
}
</style>
