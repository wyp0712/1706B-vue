<template>
  <div class="book-detail">
    <SubHeaderComponent :titleList="titleList" />

    <div class="box" v-if="detailData">
      <img :src="detailData.image" alt />
      <span>{{detailData.title}}</span>
      <span class="detailBtn" @click="attentionEvent">{{attentflag ?'关注' : '已经关注'}}</span>
    </div>
  </div>
</template>
<script>
import SubHeaderComponent from "../SubHeaderBar/index";
export default {
  name: "bookDetail",
  data() {
    return {
      titleList: {
        lable: "本书详情",
        rightTitle: "书架"
      },
      attentflag: true,
      detailData: {}
    }
  },
  components: {
    SubHeaderComponent
  },
  computed: {
    tokenData(v) {
      return this.$store.state.token;
    }
  },
  methods: {
    attentionEvent() {
      //  this.attentflag = !this.attentflag
      if (this.attentflag) {
        // 判断 是否登陆 如果没有就跳转到登陆页面
        // 取token
        if (this.tokenData) {
          this.attentflag = false;
        } else {
          this.$router.push({
            path: "/login"
          });
        }
      } else {
        this.attentflag = false;
      }
    }
  },
  created() {
    this.detailData =
      this.$route.params.item || JSON.parse(localStorage.getItem("detail"));
  }
};
</script>
<style lang="scss">
.detailBtn {
  display: inline-block;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  border-radius: 4px;
  background: #eee;
}
</style>
