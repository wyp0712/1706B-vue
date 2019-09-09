<template>
  <div class="home">
    <div class="nav">
      <span
      @click="bindEvent(item, index)"
      :class="{active: item.state}"
      v-for="(item, index) in tabs"
      :key="index">{{item.name}}</span>
    </div>

    <nav class="tab-nav">
      我是input导航组件
    </nav>

    <div class="movie-content">
      <!-- 动态组件 -->
      <keep-alive>
        <component :childMsgMovie="childMsgMovie" :is="componentId"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MovieLeft from '../components/MovieLeft/index'
import MovieRight from '../components/MovieRight/index'
export default {
  name: 'home',
  data () {
    return {
      currentComponent: 'MovieLeft',
      tabs: [
        {
          name: 'MovieLeft',
          state: true
        },
        {
          name: 'MovieRight',
          state: false
        }
      ],
      tabIndex: 0,
      movieList: [
        {
          id: 0,
          nm: '蜘蛛侠',
          boolean: true
        },
        {
          id: 1,
          nm: '蜘蛛侠2',
          boolean: false
        }
      ],
      childMsgMovie: []
    }
  },
  created () {
    this.getData()
  },
  computed: {
    componentId () {
      return `${this.currentComponent}`
    }
  },
  components: {
    MovieLeft,
    MovieRight
  },
  methods: {
    getData () {
      this.$axios.get('/getMovieList').then(res => {
        this.movieList = res.data.list.movieList
        this.childMsgMovie = res.data.list.movieList.filter(item => {
          return item.globalReleased
        })
      })
    },
    bindEvent (item = 'MovieLeft', index = 0) {
      // 切换组件名字
      this.currentComponent = item.name
      this.tabs[this.tabIndex].state = false
      item.state = true
      this.tabIndex = index

      this.childMsgMovie = []
      this.childMsgMovie = this.movieList.filter((val, ind) => {
        if (index === 0 && val.globalReleased) {
          return val
        } else if (index === 1 && !val.globalReleased) {
          return val
        }
      })
      // console.log(this.childMsgMovie, 'childMsgMovie')
    }
  }
}
</script>
<style lang="scss" scoped>
.active {
  background: #ccc;
}
.movie-content {
  width: 100%;
}
.nav {
  width: 100%;
  height: .8rem;
  display: flex;
  background: #eee;
  span {
    flex:1;
    text-align: center;
    line-height: .8rem;
    border-radius: 10px;
  }
}
.tab-nav {
  width: 100%;
  height: .8rem;
  background: red;
  position: sticky;
  left:0;
  top:0;
}
</style>
