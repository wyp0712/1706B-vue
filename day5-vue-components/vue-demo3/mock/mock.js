/* eslint-disable */
import Mock from 'mockjs'

const Userdata = []
for(var i = 0; i < 50; i++ ) {
  Userdata.push(Mock.mock({
    name: Mock.Random.cname(),
    state: Mock.Random.boolean(),
    time: Mock.Random.date('yyyy-MM-dd'),
    img: Mock.Random.image('200x100', '#02adea', 'Hello'),
    color: Mock.Random.color(),
    sentence: Mock.Random.csentence(),
    email: Mock.Random.email(),
    address: Mock.Random.county( true ),
    id: Mock.Random.id()
  }))
}
console.log(Userdata)

export default {
  Userdata
}
/* eslint-disable */