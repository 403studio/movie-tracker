const { Movie } = require('../models')

module.exports = {
  async index (req, res) {
    let movies
    try {
      const search = req.query.search
      if (search) {
        console.log(search)
        movies = await Movie.findAll({
          where: {
            $or: [
              {
                title: {
                  $like: `%${search}%`
                }
              },
              {
                director: {
                  $like: `%${search}%`
                }
              },
              {
                type: {
                  $like: `%${search}%`
                }
              }
            ]
          }
        })
        res.send(movies)
      } else {
        movies = await Movie.findAll({
          limit: 10
        })
        res.send(movies)
      }
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
