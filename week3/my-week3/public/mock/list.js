const Mock = require('mockjs')

const UserData = []

for(let i = 0; i < 20; i++) {
  UserData.push({
    img: Mock.Random.image('100x50', '#00405d', '#FFF',  `${Mock.Random.cname()}`),
    time: Mock.Random.datetime(),
    name: Mock.Random.cname(),
    address: Mock.Random.county(true),
    state: true
  })
}

module.exports = {
  UserData
}