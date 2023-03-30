const Router = require('koa-router')
const koa2Req = require('koa2-request')
const { getMusic } = require('../api')

const router = new Router()

router.post('/music', async (ctx, next) => {
  const res = await getMusic()
  ctx.body = res.body
})

module.exports = router
