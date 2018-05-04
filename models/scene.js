module.exports = (sequelize, DataTypes) => {
  return sequelize.define('scene', {
    movieID: DataTypes.INTEGER,
    timestampStart: DataTypes.DATE,
    timestampEnd: DataTypes.DATE
  })
}