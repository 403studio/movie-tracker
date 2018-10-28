const UserController = require('./controllers/UserController')
const UserPolicy = require('./policies/UserPolicy')

module.exports = (app) => {
  app.post('/register',
    UserPolicy.register,
    UserController.register
  )
  app.post('/login',
    UserController.login
  )
}
