<template>
  <div class="attention-me">
      <ul v-for="(item, index) in list" :key="index">
        <li> <img :src="item.img" alt=""> </li>
        <li> {{item.name}} </li>
        <li> {{item.address}} </li>
        {{item.state}}
        <span @click="AddAttentionEvent(item, index)" :class="{bg1: item.state}" > {{item.state ? '已关注' : '未关注'}} </span>
      </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
   ...mapState({
     attentionList: state => state.attentionList
   }) 
  },
  watch: {
    attentionList(v) {
      console.log(v, 'v')
    }
  },
  created() {
    if (localStorage.getItem('attentionList')) {
       this.list = JSON.parse(localStorage.getItem('attentionList'))
    } else {
      this.getAjaxData()
    }
  },
  methods: {
    async getAjaxData() {
      const result = await this.$axios.get('/api/attentionList')
      this.list = result.data
    },
    AddAttentionEvent(item, index) {
      this.list[index].state = !this.list[index].state
      this.$store.commit('attentFn', {item, index})
      localStorage.setItem('attentionList', JSON.stringify(this.list))
    },
    removeAttentionEvent(item, index) {
      // this.list[index].state = !this.list[index].state
      // this.$store.commit('removeAttentionFn', {
      //   item,
      //   index
      // })
      // localStorage.setItem('attentionList', JSON.stringify(this.list))
    }
  }
}
</script>
<style lang="scss">
  .attention-me {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    ul {
      width: 100%;
      .bg1 {
        background: red;
        color:#fff;
      }
      .bg2 {
        background: navy;
        color:#fff;
      }
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