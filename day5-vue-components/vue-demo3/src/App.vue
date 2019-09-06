<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <HeaderBar :headerSlideDownData="headerSlideDownData"  />
      <p class="showBtnMask" @click="showMaskClick">点击出现蒙层按钮</p>
      <DialogComponent :contentList="contentList" :maskMsg="maskMsg" @clickMask="parentFn" v-show="isShowMask" />
    </div>

    <router-view />
  </div>
</template>
<script>
// 在入口文件app.vue中引入全局样式
// import './assets/style/reset.scss'
import HeaderBar from './pages/Header/HeaderBar'
import DialogComponent from './components/Dialog/index'
export default {
  data () {
    return {
      maskMsg: ['sure', 'nosure'],
      isShowMask: false,
      contentList: [],
      headerSlideDownData: [
        {
          name: '篮球不行'
        },
        {
          name: '足球不行'
        }
      ]
    }
  },
  created () {
    this.$axios.get('/getMovieList').then(res => {
      this.contentList = res.data.list.movieList
    })
  },
  mounted () {

  },
  methods: {
    parentFn (val) {
      console.log(val, 'val-------1')
      this.isShowMask = false
    },
    showMaskClick () {
      this.isShowMask = true
    }
  },
  components: {
    HeaderBar,
    DialogComponent
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.showBtnMask {
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
  background: lightcoral;
  border-radius: 10px;
  margin: 0 auto;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
