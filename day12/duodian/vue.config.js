
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
      const UserData = [
        {
          user: 'devin',
          pwd: '123'
        },
        {
          user: 'zs',
          pwd: '456'
        }
      ]
      const tokenkey = 'bawei'
      // 登陆接口
      app.get('/api/login', (req, res) => {
        console.log(req.query, 'queryt')
         const { user, pwd } = req.query
         console.log(user, pwd)
         const loginFlag = UserData.some(item => item.user === user && item.pwd === pwd)
         if (loginFlag) {
            res.json({
              msg: '登陆成功',
              token: `${tokenkey}_${user}_${Date.now()}`
            })
         } else {
            res.json({
              msg: 'fail'
            })
         }
      })
    }
  }
}