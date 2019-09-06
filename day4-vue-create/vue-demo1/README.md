# vue-demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


工程目录说明：


├─.eslintrc.js      ：eslint配置文件
├─.gitignore        ：git配置文件
├─README.md         ：说明文档 
├─babel.config.js   ：babel 配置文件
├─package.json      ：包管理文件  
├─postcss.config.js ：浏览器前缀配置文件 postcss 

├─src               : 项目文件
|  ├─App.vue        : 主视图文件： 所有的组件可以在当前app.vue中引入，
|  ├─main.js        ：主入口js文件
|  ├─pages          ：项目组件文件夹
|  ├─components           ：公共组件放置文件夹 
|  |     ├─HeaderBar.vue
|  |     └HelloWorld.vue
|  ├─assets            ；静态资源放置文件  
|  |   ├─logo.png      
|  |   ├─style
|  |   |   └reset.scss
├─public               ：
|   ├─favicon.ico
|   └index.html



vue 设置独立的组件样式  scoped

复习tab切换

