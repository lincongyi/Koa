const Router = require('koa-router')
const koa2Req = require('koa2-request')

const router = new Router()

router.post('/getMusic', async (ctx, next) => {
  let url = `https://api.vvhan.com/api/rand.music?type=json&sort=${encodeURI(
    '热歌榜'
  )}`
  var options = {
    method: 'get',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }

  const res = await koa2Req(options)
  ctx.body = res.body
})

module.exports = router
