<template>
  <div>
    <van-button type="primary" @click="showPopup">
      展示弹出层
    </van-button>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search"  dot >标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="0">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return  {
      show: false,
      active: 0
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    getContainer() {
      return document.querySelector('.my-container');
    }
  }
}
</script>