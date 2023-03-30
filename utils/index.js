const config =
  process.env.NODE_ENV === 'production'
    ? require('../config/prod.env.config')
    : require('../config/dev.env.config')

const staticPath = '/static/uploads'

module.exports = {
  config,
  staticPath,
}
