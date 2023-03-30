const Router = require('koa-router')
const { successResponse } = require('./response')

const router = new Router()

router.post('/login', async (ctx, next) => {
  const jwt = require('jsonwebtoken')
  const { username, password } = ctx.request.body

  const secret = 'my_app'
  const token = jwt.sign({ username, password }, secret, { expiresIn: '1h' }) // 生成token
  ctx.body = {
    code: 200,
  }
  if (username === 'admin' && password === 'admin') {
    ctx.body = {
      ...successResponse,
      data: {
        token,
      },
    }
  } else {
    ctx.body = {
      ...successResponse,
      status: 401,
      msg: 'fail',
    }
  }
})

router.post('/profile', async (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      username: 'admin',
      phone: 15800033233,
      authority: 1,
    },
    status: 400,
    msg: 'success',
  }
})

router.post('/logoff', async (ctx, next) => {
  ctx.body = {
    code: 200,
    status: 400,
    msg: 'success',
  }
})

module.exports = router
