const Mock = require('mockjs')

const homeList = []
const classify = []
const rank = []
const bookRack = []

for(let i = 0; i < 20; i++) {
  homeList.push({
    title: "首页 ---" + Mock.Random.ctitle(),
    time: Mock.Random.time(),
    detail: Mock.Random.csentence(10),
    image: Mock.Random.image('200x100', `${Mock.Random.color()}`, '#FFF', `${Mock.Random.csentence(2)}`)
  })
  classify.push({
    title: "分类 ---" + Mock.Random.ctitle(),
    time: Mock.Random.time(),
    detail: Mock.Random.csentence(10),
    image: Mock.Random.image('200x100', `${Mock.Random.color()}`, '#FFF', `${Mock.Random.csentence(2)}`)
  })
  rank.push({
    title: "排行 ---" + Mock.Random.ctitle(),
    time: Mock.Random.time(),
    detail: Mock.Random.csentence(10),
    image: Mock.Random.image('200x100', `${Mock.Random.color()}`, '#FFF', `${Mock.Random.csentence(2)}`)
  })
  bookRack.push({
    title: "书架 ---"+ Mock.Random.ctitle(),
    time: Mock.Random.time(),
    detail: Mock.Random.csentence(10),
    image: Mock.Random.image('200x100', `${Mock.Random.color()}`, '#FFF', `${Mock.Random.csentence(2)}`)
  })
}
const bookList = {
  0: homeList,
  1: classify,
  2: rank,
  3: bookRack
}
module.exports = {
  bookList
}