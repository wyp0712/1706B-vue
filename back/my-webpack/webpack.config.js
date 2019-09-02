const path = require('path');

module.exports = {
  // 入口文件  多个文件配置路径：['./src/index.js', './src/index2.js']
  entry: './src/index.js',
  // 输出路径
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },

  //  webpack-dev-server;
  devServer: {
    contentBase: './dist', // 设置服务器访问的基本路径
    host: 'localhost', // 服务器的ip地址  127.0.0.1  本地ip
    port: 8080, // 端口
    open: true
  }
}