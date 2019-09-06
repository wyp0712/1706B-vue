<template>
  <div class="header">
    <button class="btns" @click="bindEventSlideDown()">点击下拉</button>

    <ul class="header-content" :class="{active: isActive}">
      <li v-for="(item, index) in headerSlideDownData" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import EventBus from '../../event-bus.js'
export default {
  props: ['headerSlideDownData', 'contentList'],
  data () {
    return {
      isActive: true
    }
  },
  watch: {
    contentList (v) {
    }
  },
  created () {
    EventBus.$on('getTarget', target => {
      console.log(target)
    })
  },
  mounted () {
  },
  methods: {
    bindEventSlideDown () {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  list-style: none;
}
.header {
  width: 100%;
  height: 45px;
  background: red;
  position: relative;
  border-bottom: 1px solid black;
  .header-content {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    height: 400px;
    background: #000;
    color: #fff;
    transition: height 0.5s;
    overflow: hidden;
  }
}

.header .active {
  height: 0;
}
</style>
