import axios from axios

const urlMap = {
  development: '/',
  production: 'http://127.0.0.0'
}

const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function getData(url) {
  return function(param = {}) {
    return axios.get(baseUrl + url).then(res => {
      const { errno, data} = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).then(e => {
    })
  }
}