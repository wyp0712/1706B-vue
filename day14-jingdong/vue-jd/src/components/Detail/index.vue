<template>
  <div>
    <h1>详情页面</h1>
    <div class="imageBox">
      <lazyComponent />
    </div>

    <div v-for="(item, index) in goodsItem" :key="index">
      <img :src="item.image" alt="">
      {{item.title}} 
    </div>
  </div>
</template>
<script>
import lazyComponent from '../imageLazy/index'
export default {
  data() {
    return {
      goodsID: '', // 货物id
      dataID: '', // 数据id
      goodsItem: []
    }
  },
  components: {
    lazyComponent
  },
  // 取id 数据id  获取id
  created() {
    this.goodID = this.$route.params.id
    this.dataID = this.$route.query.dataID
    this.getDetailData()
  },
  methods: {
    getDetailData() {
      this.$axios('/api/detail', {
        params: {
          dataID: this.dataID,
          goodsID: this.goodID
        }
      }).then(res => {
        this.goodsItem = res.data.list
      })
    }
  },

}
</script>
<style lang="scss">
.imageBox {
  width: 100%;
  height: 300px;
  border:1px solid black;
  overflow: auto;
}
  
</style>