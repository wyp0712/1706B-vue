<template>
  <div class="header-title">
    <span @click="backPage"> ⬅️返回</span>
    <span> {{list.lable}} </span>
    <span> {{list.rightTitle}} </span>
  </div>
</template>
<script>
export default {
  props: {
    titleList: Object
  },
  data() {
    return {
       
    }
  },
  computed: {
    list () {
      return this.titleList
    }
  },
  methods: {
    backPage() {
      this.$router.go(-1)
    }
  },
  created() {
    console.log(this.titleList ,'this')
  },
}
</script>
<style lang="scss">
.header-title {
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 19px;
  display: flex;
  background: #333;
  span {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
  }
}
  
</style>