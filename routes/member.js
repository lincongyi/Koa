const Router = require('koa-router')
const { successResponse } = require('./response')

const router = new Router()

router.post('/member', async (ctx, next) => {
  ctx.body = {
    ...successResponse,
    data: {
      page: 1,
      pageSize: 10,
      total: 3,
      list: [
        {
          id: '001',
          name: 'Zoe',
          avatar: '',
          level: 1,
          articleAmount: 10,
          followers: 100,
          createDate: '2022-01-01',
          remark: '用户备注信息...',
        },
        {
          id: '002',
          name: 'Ackerman',
          avatar: '',
          level: 10,
          articleAmount: 4,
          followers: 300,
          createDate: '2022-05-05',
          remark: '用户备注信息...',
        },
        {
          id: '003',
          name: 'Natalie',
          avatar: '',
          level: 20,
          articleAmount: 300,
          followers: 200,
          createDate: '2022-12-12',
          remark: '用户备注信息...',
        },
      ],
    },
  }
})

module.exports = router
