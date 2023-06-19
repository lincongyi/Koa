const Koa = require('koa')
const cors = require('koa2-cors')
const path = require('path')
const koaStatic = require('koa-static')
const mount = require('koa-mount')
const { koaBody } = require('koa-body')
const { config, staticPath } = require('./utils')

const registerRoute = require('./routes')

const { intercom } = require('./schedules')

const app = new Koa()

/**
 * 定时任务
 */
// intercom()

/**
 * 如果是return false 会默认返回以下内容
 */
// app.use(async (ctx, next) => {
//   ctx.body = 'hello world'
//   await next()
// })

/**
 * 配置路径
 */
app.use(mount(staticPath, koaStatic(path.join(__dirname, staticPath))))

/**
 * 获取上一级目录
 */
// path.resolve(__dirname, '..')

/**
 * 模块 koa-router 是一个路由管理模块
 * 模块 koa-body 是用于解析路由和请求体的参数
 * 所以，在注册路由前先使用 koa-body 中间件将无法解析之后的路由参数和请求体。
 */
app.use(
  koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
      // 上传目录
      uploadDir: path.join(__dirname, staticPath),
      // 保留文件扩展名
      keepExtensions: true,
      onFileBegin(name, file) {},
    },
  })
)

/**
 * 启动默认浏览器，打开地址
 */
// const process = require('child_process')
// process.exec('start https://www.baidu.com')

app.use(cors())

/**
 * 注册路由
 * @param {Koa} app koa实例对象
 * @returns {void}
 */
registerRoute(app)

app.listen(config.port, () => {
  console.log('running ...')
})
