<template>
  <div class="home-wrap">
    <div class="nav">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="{active: item.state}"
        @click="tabEvent(item, index)"
      >{{item.name}}</span>
    </div>

    <div class="content">
      <span class="con" v-for="(item, index) in arr" :key="index">{{item.type}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-detail",
  data() {
    return {
      tabs: [
        {
          state: true,
          name: "tab1"
        },
        {
          state: false,
          name: "tab2"
        },
        {
          state: false,
          name: "tab3"
        },
        {
          state: false,
          name: "tab4"
        }
      ],
      tabIndex: 0,
      tabList: [],
      arr: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/list").then(res => {
        this.tabList = res.data.UserList;
        this.arr = [res.data.UserList[0]] // 默认显示第一条数据

      })
    },
    tabEvent(item, index) {
      this.tabs[this.tabIndex].state = false;
      item.state = true;
      this.tabIndex = index;

      this.arr = this.tabList.filter(val => val.type === item.name);
    }
  }
};
</script>
<style lang="scss">
.active {
  background: rgb(4, 35, 59);
  color:#fff;
}
.home-wrap {
  width: 100%;
  .nav {
    width: 100%;
    height: 45px;
    display: flex;
    span {
      flex: 1;
      text-align: center;
      line-height: 45px;
    }
  }
  .content {
    width: 100%;
    padding: 5%;
    background: #eee;
  }
}
</style>