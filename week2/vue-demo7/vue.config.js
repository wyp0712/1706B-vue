const newsData = require('./mock/data.json')

module.exports = {
  devServer: {
    before: function(app, server) {
      app.get('/api/getNewsList', (req, res) => {
        let {type} = req.query
        let arr = []
        arr = newsData.tabContent.filter(item => {
          return item.type == type
        })
        res.json({
          newsData: arr
        })
      })
    }
  }
}