
const { UserData } = require('./public/mock/list.js')
 
module.exports = {
  publicPath: '/',
  lintOnSave: false,
  devServer: {
    // proxy: {
      // '/api': {
      //   target: 'http',
      //   ws: true,
      //   changeOrigin: true
      // }
    // },
    before: function(app, server) {

      // 关注人数据
      app.get('/api/attentionList', (req, res) => {
        res.json(UserData)
      })
    } 
  }
}