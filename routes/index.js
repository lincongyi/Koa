const fs = require('fs')

// 批量注册路由
module.exports = (app) => {
  if (!app) return
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.js') return
    const route = require(`./${file}`)
    app.use(route.routes()).use(route.allowedMethods())
  })
}
