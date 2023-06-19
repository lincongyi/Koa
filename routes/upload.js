const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const mime = require('mime-types')
const uuidv1 = require('uuid/v1')
const dayjs = require('dayjs')
const { config, staticPath } = require('../utils')
const { successResponse, failResponse } = require('./response')

/**
 * 遍历文件夹获取文件信息
 * @param {string} currentDirPath 需要遍历的文件夹地址
 * @param {function} callback 回调函数
 * @returns {array} files 文件信息
 */
const getFilesSync = async (currentDirPath, callback) => {
  const files = []
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach((dirent) => {
    const filePath = path.join(currentDirPath, dirent.name)
    const stat = fs.statSync(filePath)
    if (!stat) return false
    const isFile = stat.isFile() //是文件
    const isDir = stat.isDirectory() //是文件夹
    if (isFile) {
      const data = {
        uid: uuidv1(),
        type: mime.lookup(filePath),
        url: `${config.host}:${config.port}${staticPath}/${dirent.name}`,
        size: stat.size,
        createDate: dayjs(stat.atime).format('YYYY-MM-DD HH:mm:ss'),
      }
      files.push(data)
    }
    if (isDir) getFilesSync(filePath, callback) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
  })
  return files
}

const router = new Router()

/**
 * 获取图片
 */
router.post('/getImages', async (ctx, next) => {
  const directoryPath = path.resolve(__dirname, '../static/uploads')

  const data = await getFilesSync(directoryPath)

  ctx.body = {
    ...successResponse,
    data,
  }
})

/**
 * 图片上传
 */
router.post('/upload', async (ctx, next) => {
  const { files } = ctx.request
  if (!files) return false

  const { file } = files
  const isImage = ['image/png', 'image/jpeg'] //, 'image/gif']
  const { mimetype } = file

  if (!isImage.includes(mimetype))
    return (ctx.body = { ...failResponse, msg: '图片格式不符合要求' })

  const { newFilename: name, size, lastModifiedDate } = file

  ctx.body = {
    ...successResponse,
    data: {
      uid: uuidv1(),
      type: mimetype,
      url: `${config.host}:${config.port}${staticPath}/${name}`,
      size,
      createDate: dayjs(lastModifiedDate).format('YYYY-MM-DD HH:mm:ss'),
    },
  }
})

module.exports = router
