<template>
  <div>
     movieright
     <h1 v-for="(item, index) in rightArr" :key="index">{{item.nm}}</h1>
  </div>
</template>
<script>
export default {
  props: [
    'childMsgMovie'
  ],
  data () {
    return {
      rightArr: []
    }
  },
  created () {
    this.rightArr = this.childMsgMovie
  },
  watch: {
    childMsgMovie (v) {
      this.rightArr = v
      console.log(v, 'movieLeft')
    }
  }
}
</script>
