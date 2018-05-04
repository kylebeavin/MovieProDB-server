module.exports = (sequelize, DataTypes) => {
  return sequelize.define('entry', {
    scene: DataTypes.INTEGER,
    product: DataTypes.INTEGER,
    timestampAdded: DataTypes.DATE,
    entryCreator: DataTypes.INTEGER,
    timestampEdited: DataTypes.DATE,
    lastEditor: DataTypes.INTEGER
  })
}