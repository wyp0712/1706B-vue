
const MovieList = require('./mock/data.json')
// 写接口
module.exports = {
  devServer: {
    before: function(app, server) {
      // 电影数据接口
      app.get('/getMovieList', (req, res) => {
        res.json({
          list: MovieList
        })
      })
    }
  }
}