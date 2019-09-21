const Mock = require('mockjs')

const UserList = [

  { 
    type: "tab1",
    title: '首页 ---千直布率',
    time: '07:22:48',
    id: '320000199003084154',
    detail: '速就则资几查东物立清。',
    image: 'http://dummyimage.com/200x100/d2f279/FFF&text=华证。' 
  },
  { 
    type: "tab2",
    title: '首页 ---千直布率',
    time: '07:22:48',
    id: '320000199003084154',
    detail: '速就则资几查东物立清。',
    image: 'http://dummyimage.com/200x100/79aef2/FFF&text=现林。' 
  },
  { 
    type: "tab3",
    title: '首页 ---千直布率',
    time: '07:22:48',
    id: '320000199003084154',
    detail: '速就则资几查东物立清。',
    image: 'http://dummyimage.com/200x100/d2f279/FFF&text=华证。' 
  },
  { 
    type: "tab4",
    title: '首页 ---千直布率',
    time: '07:22:48',
    id: '320000199003084154',
    detail: '速就则资几查东物立清。',
    image: 'http://dummyimage.com/200x100/79aef2/FFF&text=现林。' 
  }
]



// for(let i = 0; i < 20; i++) {
//   UserList.push({
//     title: "首页 ---" + Mock.Random.ctitle(),
//     time: Mock.Random.time(),
//     id: Mock.Random.id(),
//     detail: Mock.Random.csentence(10),
//     image: Mock.Random.image('200x100', `${Mock.Random.color()}`, '#FFF', `${Mock.Random.csentence(2)}`),
//   })
// }

// console.log(UserList, )

module.exports = {
  UserList
}
