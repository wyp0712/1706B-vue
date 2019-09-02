const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/index2.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
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
  devServer: {
    contentBase: './dist', // 设置服务器访问的基本路径
    host: 'localhost', // 服务器的ip地址
    port: 8080, // 端口
    open: true
  }
}