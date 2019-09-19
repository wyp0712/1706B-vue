<template>
  <div>
    <h1>注册页面</h1>
     账号:  <input type="text" v-model="loginObj.user"><br>
     密码:  <input type="text" v-model="loginObj.pwd"><br>

     <button @click="registerEvent">注册</button>
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
    registerEvent() {
      this.$axios.get('/api/register', {params: {
        user: this.loginObj.user,
        pwd: this.loginObj.pwd
      }
      }).then(res => {
        if (res.data.errno === 0) {
          this.$toast.success(`${res.data.msg}`);
          // setTimeout(() => {
            this.$router.push({
              path: '/login'
            })
          // }, 3000)
        } else if (res.data.errno === -1) {
          this.$toast.success(`${res.data.msg}`);
        }
      })
    }
  },
}
</script>