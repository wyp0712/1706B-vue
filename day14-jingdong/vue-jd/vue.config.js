
const { bookList } = require('./public/mock/index')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function (app, server) {

      // 列表数据
      app.get('/api/list', (req, res) => {
        res.json(bookList)
      })

      const UserData = [{
        user: 'devin',
        pwd: "123"
      }]
      // 登陆 
      const tokenkey = 'bawei'
      app.get('/api/login', (req, res) => {
        const { user, pwd } = req.query
        let loginFlag = UserData.some(item => item.user === user && item.pwd === pwd)
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

      // 详情接口
      app.get('/api/detail', (req, res) => {
        // dataID 当前数据的id ； goodsId 当前详情数据id
        const { dataID, goodsID } = req.query;
        const goodItem = bookList[dataID].filter(item => item.id === goodsID)
        if (goodItem.length) {
          res.json(goodItem)
        } else {
          res.json({
            msg: '查不到数据',
            errno: -1
          })
        }
      })
    }
  }
}