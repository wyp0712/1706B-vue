#  vue:

#目录结构：
src
├─app.vue vue 文件目录 
└main.js  vue主入口文件

#  webpack.config.js    
      webpack webpacl-cli webpck-dev-server
       img   file-loader html-loader
       scss  sass-loader node-sass sass fibers
       vue   vue-loader  vue-template-compiler
       html  html-webpack-plugin

#.vue

    <template> 
      <div>
        {{ msg }}
      </div>
    </template>

    <script> 
      export default {
        data() {
          return {
            msg: "test"
          }
        }
      }
    </script>

     <style> 
      
     </style>
      
  



    