<template>
  <div>
    <h1>登陆页面</h1>
     <h1> <input type="text" v-model="userVal"> </h1>
     <h1> <input type="text" v-model="pwdVal"> </h1>
     <button @click="btnEvent"> 提交 </button>
  </div>
</template>
<script>


export default {
  data() {
    return {
      userVal: '',
      pwdVal: ''
    }
  },
  created() {
    // console.log(this.$route.query.redirect, 'query=========1')
  },
  methods: {
    btnEvent() {
      // 如果用户登陆成功就把信息存在本地存储中
      this.$axios('/api/login', {
        params: {
          user: this.userVal,
          pwd: this.pwdVal
        }
      }).then(res => {
        console.log(res, 'res')
        // if (res.data.msg === 'success') {}
        if (res.data.msg === 'success') {
          window.localStorage.record = true

          alert('登陆成功')
          this.$router.push({
            path: this.$route.query.redirect || '/'
          })
        } else {
          alert('登陆失败，请注册')
          this.$router.push({
            path: '/register'
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
input{
  border:1px solid black;
}
</style>
