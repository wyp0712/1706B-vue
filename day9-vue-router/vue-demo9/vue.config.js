const listData = require('./mock/chuizi.json')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
       
      // 列表接口  
      app.get('/api/list', (req, res) => {
        res.json({
          list: listData
        })
      })

      // 查询详情接口  querystring 对参数 查询字符串
      app.get('/api/detail', (req, res) => {
        let { id } = req.query
        res.json({
          list: listData.data.skuInfo.filter(item => item.skuId == id)
        })
      })
    }
  }
}