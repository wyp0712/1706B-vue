
const listData = require('./mock/chuizi.json')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
      // 列表接口 只负责渲染数据
      app.get('/api/list', (req, res) => {
        res.json({
          list: listData
        })
      })

      // 详情页面接口，
      app.get('/api/detail', (req, res) => {
        let { id } = req.query
        res.json({
          list: listData.data.skuInfo.filter(item => item.skuId == id)
        })
      }) 
    }
  }
}