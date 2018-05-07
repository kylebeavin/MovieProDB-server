module.exports = (sequelize, DataTypes) => {
    return sequelize.define('movie', {
        title: DataTypes.STRING,
        productionCompany: DataTypes.STRING,
        genre: DataTypes.STRING
    })
}