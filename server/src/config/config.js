module.exports = {
  db: {
    database: process.env.DATABASE || 'movietracker',
    user: process.env.USER || 'movietracker',
    password: process.env.PASSWORD || 'movietracker',
    options: {
      host: 'localhost',
      dialect: 'sqlite',
      storage: './movietracker.sqlite'
    }
  },
  jwt: {
    secret: process.env.JWTSECRET || 'movietracker',
    options: {
      expiresIn: '2h'
    }
  }
}
