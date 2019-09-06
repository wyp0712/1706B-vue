// vue.config.js
const movieList = require('./mock/data.json')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        // ws: true,
        // changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    },
    before: function(app, server) {
      app.get('/getMovieList', (req, res) => {
        res.json({
          list: movieList
        })
      })
    }
  }
}
