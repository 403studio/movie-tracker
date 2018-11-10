const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = (req, res, next) => {
  const authorization = req.header('Authorization')
  if (authorization) {
    const token = (authorization.split(' '))[1]
    try {
      jwt.verify(token, config.jwt.secret)
      next()
    } catch (err) {
      res.status(403).send('访问拒绝,没有权限')
    }
  } else {
    res.status(403).send('访问拒绝,没有权限')
  }
  // const decoded = jwt.verify(req.)
}
