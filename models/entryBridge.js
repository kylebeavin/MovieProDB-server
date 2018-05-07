module.exports = (sequelize, DataTypes) => {
  return sequelize.define('entry', {
    scene_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    entryCreator_id: DataTypes.INTEGER,
    lastEditor_id: DataTypes.INTEGER
  })
}