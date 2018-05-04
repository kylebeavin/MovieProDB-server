module.exports = (sequelize, DataTypes) => {
  return sequelize.define('scene', {
    movie_id: DataTypes.INTEGER,
    timestampStart: DataTypes.TIME,
    timestampEnd: DataTypes.TIME
  })
}