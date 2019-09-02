const path = require('path');
const webpack = require('webpack');
// 根据HTML模板自动生成HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack提取分离css单独打包
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

//  webpack提取分离css单独打包 webpack 4;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 压缩css及优化css结构
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].boundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' //   将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src','img:data-src']
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader' },
      //     {
      //       loader: 'postcss-loader',
      //     }
      //   ]
      // },
      //
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader', // 先加载css-loader
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        // 表示不在指定的目录查找文件
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './dist', // 设置服务器访问的基本目录
    host: 'localhost', // 服务器的ip地址
    port: 8888, // 端口
    open: true,
    hot: true
  },
  // resolve: {
  // 别名
  //   alias: {
  //     jQuery: path.resolve(__dirname, 'dist/js/aa.js')
  //   }
  // },
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g, // 用于匹配需要优化或者压缩的资源名。默认值是 /.css$/g
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } } ]
      },
      canPrint: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jQuery'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模版文件路径
      filename: 'webpack.html', // 生成文件的名称
      minify: {
        minimize: true, // 是否打包为最小值
        removeAttributeQuotes: true, // 去除引号
        removeComments: true, // 去除注释
        collapseWhitespace: true, // 去除空格
        minifyCSS: true, // 压缩html内的样式,
        minifyJS: true, // 压缩html内的js;
        removeEmptyElements: true // 清理内容为空元素
      },
      hash: true, // 引入产出资源的时候加上哈希，避免缓存
    }),
  ]
}

module.exports = config;