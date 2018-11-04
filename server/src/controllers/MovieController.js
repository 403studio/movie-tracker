const { Movie } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const movies = await Movie.findAll({
        limit: 10
      })
      res.send(movies)
    } catch (error) {
      res.status(500).send({
        error: '数据查询失败'
      })
    }
  },
  async post (req, res) {
    try {
      const movie = await Movie.create(req.body)
      res.send(movie)
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: '数据创建失败'
      })
    }
  }
}
