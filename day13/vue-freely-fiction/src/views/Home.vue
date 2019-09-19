<template>
  <div class="home">
    <nav class="navbar">
      <span
        @click="tabEvent(item, index)"
        :class="{isActive:item.state}"
        v-for="(item,index) in fictionTitle"
        :key="index"
      >{{item.title}}</span>
    </nav>
    <div class="main">
      <component :bookList="bookList" :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import BookrackComponent from "../components/Bookrack/index";
import ClassifyComponent from "../components/Classify/index";
import HomeComponent from "../components/Home/index";
import RankComponent from "../components/Ranknumber/index";

export default {
  name: "home",
  data() {
    return {
      componentId: "HomeComponent", // 默认显示组件名称
      fictionTitle: [
        {
          title: "首页",
          state: true,
          componentName: "HomeComponent"
        },
        {
          title: "分类",
          state: false,
          componentName: "ClassifyComponent"
        },
        {
          title: "排行",
          state: false,
          componentName: "RankComponent"
        },
        {
          title: "书架",
          state: false,
          componentName: "BookrackComponent"
        }
      ],
      tabIndex: 0,
      bookList: []
    };
  },
  created() {
    this.getBookData(0);
  },
  computed: {},
  methods: {
    async getBookData(index) {
      const res = await this.$axios.get("/api/list");
      this.bookList = res.data[index];
    },
    tabEvent(item, index) {
      // 切换组件名称
      this.componentId = item.componentName;
      this.fictionTitle[this.tabIndex].state = false;
      item.state = true;
      this.tabIndex = index;
      // 0 1 2 3
      this.getBookData(index);
    }
  },
  components: {
    BookrackComponent,
    ClassifyComponent,
    HomeComponent,
    RankComponent
  }
};
</script>
<style lang="scss">
.isActive {
  background: #ccc;
  color: red;
}
.home {
  width: 100%;
  height: 100%;
  .navbar {
    width: 100%;
    height: 40px;
    display: flex;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
