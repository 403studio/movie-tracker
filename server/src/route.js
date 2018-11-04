const UserController = require('./controllers/UserController')
const MovieController = require('./controllers/MovieController')
const UserPolicy = require('./policies/UserPolicy')

module.exports = (app) => {
  app.post('/register',
    UserPolicy.register,
    UserController.register
  )
  app.post('/login',
    UserController.login
  )

  app.get('/movies',
    MovieController.index
  )
  app.post('/movie',
    // TODO:添加数据合法性校验
    MovieController.post
  )
}
