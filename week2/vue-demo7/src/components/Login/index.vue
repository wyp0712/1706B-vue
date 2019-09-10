<template>
  <div class="login-box">
    登陆注册
    <hr />账号：
    <input type="text" class="user" v-model="userVal" />
    <br />密码：
    <input type="passworld" class="pwd" v-model="pwdVal" />
    <br />

    <button class="btn" @click="bindEvent">提交</button>
    <hr />
  </div>
</template>
<script>
export default {
  data () {
    return {
      userVal: '',
      pwdVal: ''
    }
  },
  created () {
    this.bindEvent()
  },
  methods: {
    bindEvent () {
      if (this.userVal && this.pwdVal) {
        window.localStorage.login = JSON.stringify({
          isAuth: true
        })
        this.$router.push({
          path: this.$route.query.redirect
        })
      }
    }
  }
}
</script>
<style lang="scss">
.user {
  border: 1px solid black;
}
.pwd {
  border: 1px solid black;
}
</style>
