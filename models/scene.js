module.exports = (sequelize, DataTypes) => {
  return sequelize.define('scene', {
    movie_id: DataTypes.INTEGER,
    timestampStart: DataTypes.DATE,
    timestampEnd: DataTypes.DATE
  })
}