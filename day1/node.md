1. npm init 


 启动方式： node方式： node index.js    
 npm启动方法： npm run + dev 

 npm install webpack webpack-cli -g

开发依赖：webpack-dev-server

 npm install webpack webpack-cli --save-dev 
 npm install webpack-dev --save-dev

线上依赖：  pm2

 npm install pm2 --save
 
2. package.json 

   scripts: {
     "dev": "webpack --mode development",
     "build": "webpack --mode production"
   }



   src -  入口


   dist - 出口

3. webpack :   webpack.config.js

  module.exports = {
    entry: "入口",
    output: {
      path: path.resolve(),
      filename: 'boundle.js'
    },
    module: {  loader: 打包规则
       rules: {
         test: /\.css$/,
         use: []
       }
    },
    pugins: {}
    <!-- 插件 -->
  }

