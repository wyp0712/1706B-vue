import { fstat } from "fs";

/**
 * 
 * 异步：
 *   1. 定时器  
 *   2. dom监听  ---  dom0 dom2监听事件 click  一个按钮
 *   3. ajax    
* */

/**
 * 异步需要解决： 
 * 
 * 1. 回调函数   缺点： 回调地狱；
 * 2. promise
 *    pedding  -> resolve 
 *    pedding  -> reject
 *   状态不可逆
 * 
 * 3. *function
 * 
 * 4. async await  以同步的方式输出异步代码
 * 
 */

// function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('arr')
//     }, 3000)
//   })
// }
// a().then(res => {
//   console.log(res)
// })
// const http = require('http');

// http.createServer(handleServer).listen(3000, () => { console.log(3000) })

// function handleServer(req, res) {
// req,  res  post   
// 客户端   读页面  写数据
//   const methods = req.url;
//   if (extname) {
//   } else {
//     getPost(req).then(res => {
//       req.body = res;
//       if (methods === "POST" && address == '/login') {

//       }
//     })
//   }
// }

// function getPost(req) {
//   return new Promise((resolve, reject) => {
//     let postData = ''
//     req.on('data', (chunk) => {
//       postData += chunk.toString()
//     })
//     req.on('end', () => {
//       resolve(postData)
//     })
//   })
// }


/**
 *  
 * 
 *  红路灯 
 * 
 *  fs.readFile('', function() {})
 */

function readF(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, function (err, data) {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

function axios(url) {
  return new Promise((resolve, reject) => {
    ajax('', function() {

    })
  })
}

axios().then(res => {

})




