
const { bookList } = require('./public/mock/index')
// console.log(bookList, 'bookList')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
      app.get('/api/list', (req, res) => {
        res.json(bookList)
      })
    }
  }
}