
const userList = require('./public/mock/mouth')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app, server) {
        
      const userData = [
        {
          user: '123',
          pwd: '123'
        }
      ]
      // 
      const tokenKey = 'bawei'
      app.get('/api/login', (req, res) => {
         const { user, pwd } = req.query;
         const loginFlag = userData.some(item =>  item.user === user)
         if (loginFlag) {
           res.json({
             msg: 'success',
             token: `${tokenKey}_${user}_${Date.now()}`,  // 
             errno: 0
           })
         } else {
          res.json({
            msg: 'fail',
            errno: -1
          })
         }
      })
     
      // 列表接口
      app.get('/api/list', (req, res) => {
        res.json(userList)
      })
      
      // 轮播图接口
      app.get('/api/list', (req, res) => {
        res.json([
          {
            image: 'https://resource.smartisan.com/resource/b28254e9f51cd6304ccca3519b68b6cf.png?x-oss-process=image/resize,w_750/format,webp'
          },
          {
            image: 'https://resource.smartisan.com/resource/b28254e9f51cd6304ccca3519b68b6cf.png?x-oss-process=image/resize,w_750/format,webp'
          },
          {
            image: 'https://resource.smartisan.com/resource/b28254e9f51cd6304ccca3519b68b6cf.png?x-oss-process=image/resize,w_750/format,webp'
          }
        ])
      })

      // 详情页面接口
      app.get('/api/detail', (req, res) => {
        const { id } = req.query;
        const arr = userList.filter(item => item.id === id) 
        res.json(arr)
      })  
    }
  }
}