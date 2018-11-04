const Sequelize = require('sequelize')
const config = require('../config/config')
const path = require('path')
const fs = require('fs')

const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
db['sequelize'] = sequelize
// db['Movie'].sync({ force: true })

module.exports = db
