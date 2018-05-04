module.exports = (sequelize, DataTypes) => {
  return sequelize.define('product', {
    productName: DataTypes.STRING,
    seller: DataTypes.STRING,
    productNumber: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING
  })
}