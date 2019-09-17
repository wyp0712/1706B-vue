<template>
  <div class="attention-you">
      <ul v-for="(item, index) in attentionYouList" :key="index">
        <li> <img :src="item.img" alt=""> </li> 
        <li> {{item.name}}</li>
        <li> {{item.address}} </li>
        <span @click="removeAttentionEvent(item, index)"> 取消关注 </span>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    attentionYouList () {
      return this.$store.state.attentionList
    }
  },
  created() {
  },
  methods: {
    removeAttentionEvent(item, index) {
      this.$store.commit('removeAttentionFn', {item, index}) 
    }
  }
}
</script>
<style lang="scss">
  .attention-you {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    ul {
      width: 100%;
      li{
        display: inline-block;
        line-height: 30px;
        text-align: center;
      }
      span {
        display: inline-block;
        width: 150px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border:1px solid black;
        cursor: pointer;
      }
    }
  }
</style>