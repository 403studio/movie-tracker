module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    director: DataTypes.STRING,
    screenwriter: DataTypes.STRING,
    type: DataTypes.STRING,
    duration: DataTypes.STRING,
    imdb: {
      type: DataTypes.STRING,
      unique: true
    },
    poster: DataTypes.STRING,
    description: DataTypes.TEXT
  })
}
