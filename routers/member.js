const Router = require('koa-router')

const router = new Router()

router.get('/member',async (ctx,next)=>{
  ctx.body = {
    code: 200,
    status: 400,
    msg: 'success',
    data: [
      {
        name:'Zoe',
        age:20,
        sex:1
      },
      {
        name:'Ackerman',
        age:21,
        sex:0
      },
      {
        name:'Grace',
        age:23,
        sex:1
      },
    ]
  }
})

module.exports = router
