<template>
  <div>
    <h1>登陆页面</h1>
     账号： <input type="text" v-model="loginObj.user"><br>
     密码 <input type="text" v-model="loginObj.pwd"><br>

     <button @click="loginEvent">登陆</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginObj: {
        user: '',
        pwd: ''
      }
    }
  },
  methods: {
    loginEvent() {
      this.$axios.get('/api/login', {params: {
        user: this.loginObj.user,
        pwd: this.loginObj.pwd
      }
      }).then(res => {
        if (res.data.errno === 0) {
          this.$toast.success(`${res.data.msg}`);
          // 如果登陆成功就把token存在vuex中
          this.$store.commit('setToken', res.data.token)
          setTimeout(() => {
            this.$router.push({
              path: '/detail'
            })
          }, 3000)
        }
      })
    }
  },
}
</script>
<style lang="scss">
  input {
    border:1px solid black;
  }
</style>