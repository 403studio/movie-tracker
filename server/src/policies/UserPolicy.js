const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    let errorMsg = ''
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    }
    const { error } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          errorMsg = '请输入有效的E-mail地址'
          break
        case 'password':
          errorMsg = '密码不符合规范要求，密码只能包含字母数字且长度为8到32位'
          break
        default:
          break
      }
      res.status(400).send({
        code: 400,
        result: errorMsg
      })
    } else {
      next()
    }
  }
}
