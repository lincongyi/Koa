const koa2Req = require('koa2-request')

const options = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

const getMusic = () => {
  const url = `https://api.vvhan.com/api/rand.music?type=json&sort=${encodeURI(
    '热歌榜'
  )}`

  return koa2Req({ ...options, url })
}

module.exports = {
  getMusic,
}
