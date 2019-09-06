const TextMsg = require('./mock/data.json')

module.exports = {
  // lintOnSave: false
  devServer: {
    before: function(app, server) {
      app.get('/getMovieList', (req, res) => {
        res.json({
          list: TextMsg
        })
      })
    }
  }
}