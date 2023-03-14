const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')

const registerRoute = require('./routes')

const app = new Koa()

app.use(cors())
app.use(bodyParser())

/**
 * 注册路由
 * @param {Koa} app koa实例对象
 * @returns {void}
 */
registerRoute(app)

app.listen(3000, () => {
  console.log('running ...')
})
