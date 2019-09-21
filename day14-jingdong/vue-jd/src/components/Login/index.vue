<template>
  <div>
    账号： <input type="text" name="" id="" v-model="username"><br>
    密码： <input type="text" name="" id="" v-model="pwd"><br>

    <button @click="successBtn">登陆</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      username: '',
      pwd:''
    }
  },
  methods: {
    successBtn() {
      this.$axios.get('/api/login', {
        params: {
          user: this.username,
          pwd: this.pwd
        }
      }).then(res => {
        console.log(res, 'res')
        if(res.data.errno === 0) {
          this.$router.push({
            path: '/home'
          })
        }
      })
    }
  },
}
</script>