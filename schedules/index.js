const schedule = require('node-schedule')
const { getMusic } = require('../api')

let { minute, second } = new schedule.RecurrenceRule()
minute = [0, 30]
second = [0, 10, 20, 30, 40, 50] // 每隔 20 秒执行一次

const intercom = () => {
  // 启动任务
  schedule.scheduleJob({ second }, async () => {
    const res = await getMusic()
    console.log(res.body)
  })
}

module.exports = {
  intercom,
}
