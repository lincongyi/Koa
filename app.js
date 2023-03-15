const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const static = require('koa-static')

const registerRoute = require('./routes')

const { intercom } = require('./schedules')

const app = new Koa()

app.use(cors())
app.use(bodyParser())

/**
 * 注册路由
 * @param {Koa} app koa实例对象
 * @returns {void}
 */
registerRoute(app)

// intercom()

app.use(async (ctx, next) => {
  ctx.body = 'hello world'
  await next()
})

const staticPath = 'static'

// 配置路径
app.use(static(path.join(__dirname, staticPath)))

app.listen(3000, () => {
  console.log('running ...')
})
