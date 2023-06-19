const Router = require('koa-router')
const Mock = require('mockjs')
const { successResponse } = require('./response')

const router = new Router()

// 该文件下的路由会以 member 作为前缀
router.prefix('/member')

router.post('/', async (ctx, next) => {
  ctx.body = Mock.mock({
    ...successResponse,
    data: {
      page: 1,
      pageSize: 10,
      total: 3,
      'list|1-10': [
        {
          id: '@increment',
          name: '@name',
          avatar: '',
          level: '@integer( 1, 10 )',
          articleAmount: '@natural( 0, 100 )',
          followers: '@natural( 0, 100 )',
          createDate: '@date',
          remark: '@cparagraph( 1, 3 )',
        },
      ],
    },
  })
})

module.exports = router
