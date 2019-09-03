const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const canrouselData = require('./mock/canrousel.json')
const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // css
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // img
      {
        test: /\.(png|jpg|gif|jpe*g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img/'
            }
          }
        ]
      },
      // html-img
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:data-src']
          }
        }
      },
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // iconfont
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/font/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 
  devServer: {
    contentBase: path.join(__dirname + 'dist'),
    host: '0.0.0.0',
    port: 8000,
    open: true,
    before: function (app, server) {
      // RESTAPI
      app.get('/getCarouselList', function (req, res) {
        res.json({
          list: canrouselData
        })
      })
    }
  }
}

module.exports = config