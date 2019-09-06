import Mock from 'mockjs'

const UserData = []
for (let i = 0; i < 30; i++) {
  UserData.push({
    boolean: Mock.Random.boolean(),
    name: Mock.Random.cname()
  })
}

export default {
  UserData
}
