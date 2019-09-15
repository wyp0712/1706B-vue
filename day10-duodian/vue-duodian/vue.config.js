const list = require('./public/mock/cart.json')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
      app.get('/api/list', (req, res) => {
        res.json(list)
      })
    }
  }
}