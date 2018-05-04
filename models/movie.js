module.exports = (seq, DataTypes) => {
    return sequelize.define('movie', {
        title: DataTypes.STRING,
        productionCompany: DataTypes.INTEGER,
        genre: DataTypes.STRING
    })
}