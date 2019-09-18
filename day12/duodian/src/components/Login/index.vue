<template>
  <div>
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
        console.log(res.data, 'login')
        this.$store.commit('setToken', res.data.token)
        this.$router.push({
          path: '/home'
        })
      })
    }
  },
}
</script>