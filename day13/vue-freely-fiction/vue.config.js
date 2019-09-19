
const { bookList } = require('./public/mock/index')
// console.log(bookList, 'bookList')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
      app.get('/api/list', (req, res) => {
        res.json(bookList)
      })

      const UserData = [{
        user: 'devin',
        pwd: "123"
      }]
       
      const tokenkey = 'bawei' 
      app.get('/api/login', (req, res) => {
        const { user, pwd } = req.query
        let loginFlag =  UserData.some(item => item.user === user && item.pwd === pwd)
        if (loginFlag) {
          res.json({
            token: `${tokenkey}_${user}_${Date.now()}`,
            msg: 'success',
            errno: 0
          })
        } else {
          res.json({
            errno: -1
          })
        }
      })
    }
  }
}