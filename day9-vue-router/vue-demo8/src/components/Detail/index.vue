<template>
  <div class="detail-box">

     <ul>
       <!-- 数据判断 判断是否有数据 -->
       <li v-if="detailMsg.length">
          <img :src="detailMsg[0].images" alt="">
       </li>
     </ul> 

  </div>
</template>
<script>
export default {
  data() {
    return {
      // paramId: $route.params
      detailMsg: []
    }
  },
  watch: {
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      console.log(this.$route.params.id)
      // 请求详情接口
      this.$axios.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        console.log(res, 'res') 
        this.detailMsg = res.data.list 
      })
    }
  },
}
</script>
<style lang="scss">
  img {
    width: 200px;
    height: 200px;
    text-align: center;
  }
</style>