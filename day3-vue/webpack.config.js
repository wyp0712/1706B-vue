const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 数据
const movieData = require('./mock/data.json')

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'boundle.js'
  },
  module: {
    rules: [
       {
         test: /\.vue$/,
         use: 'vue-loader'
       },
       {
         test: /\.(sa|sc|c)ss$/i,
         use: [
           'style-loader',
           'css-loader',
           'sass-loader'
         ]
       }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: 8000, // 端口
    host: '0.0.0.0',
    open: true,
    // 服务器内部的所有其他中间件之前执行自定义中间件的能力。
    before: function(app, server) {
      app.get('/movie/list', function(req, res) {
        res.json({
          list: movieData
        })
      })
    }
  }
}
// CommonJs 后端
module.exports = config

