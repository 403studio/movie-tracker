const { User } = require('../models')

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
  }
}
