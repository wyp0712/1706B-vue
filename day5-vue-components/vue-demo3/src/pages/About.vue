<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="nav">
      <span
        @click="bindTabEvent(item, index)"
        :class="{active: item.state}"
        v-for="(item, index) in tabList"
        :key="index"
      >{{item.name}}</span>
    </div>

    <ul class="nav-content">
      <li v-for="(item, index) in arr" :key="index">{{ item.nm }}</li>
    </ul>

  </div>
</template>
<script>
export default {
  props: ['contentList'],
  data () {
    return {
      tabList: [
        {
          name: '正在上映',
          state: true
        },
        {
          name: '即将上映',
          state: false
        }
      ],
      tabIndex: 0,
      navContentList: [],
      arr: []
    }
  },
  watch: {
  },
  created () {
    this.$axios.get('/getMovieList').then(res => {
      this.navContentList = res.data.list.movieList
    })
  },
  methods: {
    bindTabEvent (item, index) {
      this.tabList[this.tabIndex].state = false
      item.state = true
      this.tabIndex = index
      this.arr = []
      // this.navContentList.map(item => {
      //   if(item.globalReleased  && index == 0) {
      //     this.arr.push(item)
      //   } else if (!item.globalReleased && index == 1) {
      //     this.arr.push(item)
      //   }
      // })
      this.arr = this.navContentList.filter(item => {
        if (item.globalReleased && index === 0) {
          return item
        } else if (!item.globalReleased && index === 1) {
          return item
        }
      })
    }
  }
}
</script>
<style lang="scss">
.nav {
  width: 100%;
  height: 45px;
  display: flex;

  span {
    flex: 1;
    text-align: center;
    line-height: 45px;
    font-size: 20px;
  }
}
.active {
  background: red;
  color: #fff;
}
</style>
