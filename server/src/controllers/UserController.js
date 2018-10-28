const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSign (payload) {
  return jwt.sign(payload, config.jwt.secret, config.jwt.options)
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send({
        code: 200,
        result: user.toJSON()
      })
    } catch (error) {
      console.log(error)
      res.status(400).send({
        code: 400,
        result: '用户创建失败'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          code: 403,
          result: '用户登录失败，没有找到相关用户信息'
        })
      }
      // TODO: 添加await,hash判断出现错误
      const isValid = user.comparePassword(password)
      console.log(isValid)
      if (!isValid) {
        return res.status(403).send({
          code: 403,
          result: '用户名密码错误'
        })
      }
      res.send({
        code: 200,
        result: {
          user: user.toJSON(),
          token: jwtSign(user.toJSON())
        }
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        code: 500,
        result: '用户登录失败，请重试'
      })
    }
  }
}
