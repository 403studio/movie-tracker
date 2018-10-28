const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, _options) {
  return bcrypt.genSaltAsync(8)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
      // validate: {
      //   isEmail: {
      //     msg: '邮箱格式错误'
      //   }
      // }
    },
    password: DataTypes.STRING
  },
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  }
  )
  User.prototype.comparePassword = function (password) {
    // console.log(password)
    // console.log(this.password)
    return bcrypt.compareAsync(password, this.password)
  }

  return User
}
