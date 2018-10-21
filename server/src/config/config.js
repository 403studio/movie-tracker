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
  }
}
