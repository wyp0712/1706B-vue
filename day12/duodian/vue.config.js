const fs = require('fs')
const UserData = require('./public/mock/user.json')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: function (app, server) {
      // const UserData = [
      //   {
      //     user: 'devin',
      //     pwd: '123'
      //   },
      //   {
      //     user: 'zs',
      //     pwd: '456'
      //   }
      // ]
      const tokenkey = 'bawei'
      // 登陆接口
      app.get('/api/login', (req, res) => {
        console.log(req.query, 'queryt')
        const { user, pwd } = req.query
        console.log(user, pwd)
        const loginFlag = UserData.some(item => item.user === user && item.pwd === pwd)
        if (loginFlag) {
          res.json({
            errno: 0,
            msg: '登陆成功,即将跳转页面',
            token: `${tokenkey}_${user}_${Date.now()}`
          })
        } else {
          res.json({
            errno: -1,
            msg: '登陆失败，请注册账号'
          })
        }
      })

      app.get('/api/register', (req, res) => {
        const { user, pwd } = req.query
        const isRegister = UserData.some(item => item.user === user)
        
        if (isRegister) {
          res.json({
            msg: "已经注册，请换个账号",
            errno: -1
          })
        } else {
          UserData.push({
            user: user,
            pwd: pwd
          })
          const isWriteFlag = fs.writeFileSync('./public/mock/user.json', JSON.stringify(UserData))
          if (!isWriteFlag) {
            res.json({
              msg: "注册成功，即将跳转登陆页面",
              errno: 0
            })
          }
        }
      })
    }
  }
}