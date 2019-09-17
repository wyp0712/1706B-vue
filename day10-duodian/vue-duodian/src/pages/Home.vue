<template>
  <div class="home">
    <ul class="goods-item" v-for="(item, index) in list" :key="index">
      <li>
        <span class="goodsMsg">{{item.name}} ---->: {{item.count}}</span>
        <span class="addBtn" @click="addEvent(item, index)">+</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      list: [],
      storage: ""
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.getAjaxData();
  },
  methods: {
    async getAjaxData() {
      const result = await this.$axios.get('/api/list')
      this.list = result.data
    },
    addEvent(item, index) {       // 通过 commit 方法提交给vuex中mutaitons
      this.$store.commit('toCart', item) 
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.home {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding: 10%;
  ul {
    width: 100%;
    margin-bottom: 5px;
    li {
      width: 100%; 
      line-height: 35px;
      .goodsMsg {
        display: inline-block;
        width: 220px;
        line-height: 35px;
        border:1px solid black;
      }
    }
  }
}
.addBtn {
  margin-top: 5px;
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #000;
  color:#fff;
  text-align: center;
  line-height: 35px;
  font-size: 35px;
}
</style>