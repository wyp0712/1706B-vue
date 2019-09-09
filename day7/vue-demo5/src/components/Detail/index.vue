<template>
  <div class="detail-container">
    detail-container
    {{$route.params.id}}
    <div v-for="(item, index) in filterList" :key="index">
    <img :src="item.img" alt="">
    <span> {{item.nm}} </span>
      
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      movieData: [],
      filterList: []
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.getData()
    // console.log(this.getFilterList(), 'filter')
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to, from)
  },
  watch: {
    movieData () {
      this.filterList = this.getFilterList()
      console.log(this.getFilterList(), 'watch-----movieData')
    }
  },
  methods: {
    getData () {
      this.$axios.get('/getMovieList').then(res => {
        // console.log(res.data.list.movieList)
        this.movieData = res.data.list.movieList
      })
    },
    getFilterList () {
      return this.movieData.filter(item => {
        return item.id === Number(this.$route.params.id)
      })
    }
  }
}
</script>
