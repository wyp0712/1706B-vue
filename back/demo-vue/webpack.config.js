
/**
 *  
 * @param [加载.vue文件]
 * @param [加载静态资源css;png;stylus]
 * @param [webpack-dev-server]
 * 打包 减少http请求
// webpack 只支持js 不支持vue
// 使用npm run 执行webpack 会调用本地的webpack使用 更好一些 保持版本一致
 */
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 分离css单独打包 webpack 4;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 清除之前打包的旧文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// process.env 启动命令时候的环境变量
const isDev = process.env.NODE_ENV = 'development'
console.log(process.env.NODE_ENV, 'console.log(process.env.NODE_ENV)------------')
const MovieData = require('./mock/movie.json.js')

const config = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'boundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jp*g|svg)$/i,
        use: [
          {
            // webpack的加载器，用于将文件转换为base64 URI。
            loader: 'url-loader',
            options: {
              limit: 1024, // 对于小图片，减少http请求
              name: '[name]-aabbcc.[ext]'
            }
          }
        ]
      },
      // css工具
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    // 区分环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    // 配合vue-loader
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].css" // 提取出来的css文件路径以及命名
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g, // 用于匹配需要优化或者压缩的资源名。默认值是 /.css$/g
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
  ],
  // 添加别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
}

if (isDev) {
  config.devServer = {
    port: 8000,
    host: '0.0.0.0', // 设置成这个可以使用内网ip 加油其他方式访问 如果设置为localhost 则不能用ip访问，
    overlay: {
      errors: true, // 将错误显示在网页上
    },
    open: true,
    hot: true, // 热更新 只渲染当前更改组件
    before: function (app, server) {
      app.get('/movie/list', function (req, res) {
        res.json({ movies: MovieData })
      })
    }
  }
}



module.exports = config;