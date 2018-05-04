module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    companyID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    userType: DataTypes.INTEGER,
    regStatus: DataTypes.BOOLEAN
  })
}