const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** 
 * @param [webpack] [webpack-cli] [webpack-dev-server]
 * @param [scss] [sass-loader] [node-sass]
 * @param [img] [file-loader] [html-laoder]
 * @param [js] [babel-loader] [@babel/core] [@babel/preset-env]
 * @param [html] [html-webpack-plugin]
 * 
*/
const config = {
  mode: "development",
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'boundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpe*g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img'
            }
          }
        ]
      },
      // <img src>
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      },
      // es6
      {
        test: /\.js$/,
        exclude: /node_moudels/,
        use: [
          {
            loader: 'babel-loader'
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
  devServer: {
    port: 8888,
    host: '0.0.0.0', // localhost  127.0.0.1  本机ip
    open: true,
    // hot: true, // 热更新  只修改当前更改的内容
  }
}

module.exports = config;