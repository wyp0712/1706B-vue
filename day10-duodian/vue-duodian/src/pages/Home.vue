<template>
  <div class="home">
    <ul class="goods-item" v-for="(item, index) in list" :key="index">
      <li>
        <span>{{item.name}}</span>
        <span>{{item.count}}</span>
        <button @click="addEvent(item)">+</button>
        <button @click="removeEvent(item)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      list: [
        {
          name: "小米9",
          count: 0
        },
        {
          name: "苹果11",
          count: 0
        },
        {
          name: "苹果pro",
          count: 0
        }
      ]
    }
  },
  methods: {
    addEvent(item) {
      // 通过 commit 方法提交给vuex中mutaitons
      this.$store.commit('addFn', item)
    },
    removeEvent(item) {
      this.$store.commit('removeFn', item)
    }
  }
}
</script>
<style lang="scss">
*{
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
        display: flex;
        span {
          flex:1;
        }
        button {
          flex:1;
          outline: none;
          border:1px solid black;
        }
      }
    }
  }
</style>