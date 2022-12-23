const Router = require("koa-router");

const router = new Router();

router.post("/article/type", async (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      typeList: [
        { value: "0", label: "全部" },
        { value: "1", label: "时事类" },
        { value: "2", label: "资讯类" },
        { value: "3", label: "技术类" },
        { value: "4", label: "生活类" },
        { value: "5", label: "其他" },
      ],
    },
    status: 400,
    msg: "success",
  };
});

router.post("/article/list", async (ctx, next) => {
  ctx.body = {
    code: 200,
    data: {
      page: 1,
      pageSize: 10,
      total: 3,
      list: [
        {
          id: "001",
          cover: "",
          title: "这样封装列表 hooks,一天可以开发 20 个页面",
          status: "1",
          type: "1",
          publishDate: "2022-01-01",
          readTimes: "1",
          commentTimes: "1",
        },
        {
          id: "002",
          cover:
            "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffa47d869dd944a39fbd09ed41abe112~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?",
          title: "线上崩了？一招教你快速定位问题！",
          status: "2",
          type: "2",
          publishDate: "2022-04-01",
          readTimes: "22",
          commentTimes: "22",
        },
        {
          id: "003",
          cover:
            "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78f3bad55d04419fbbdd835d6130e606~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?",
          title: "为什么我抓不到baidu的数据包",
          status: "3",
          type: "3",
          publishDate: "2022-06-01",
          readTimes: "0",
          commentTimes: "0",
        },
      ],
    },
    status: 400,
    msg: "success",
  };
});

module.exports = router;
