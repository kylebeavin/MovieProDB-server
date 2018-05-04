module.exports = (seq, DataTypes){
    return sequelize.define('movies', {
        title: DataTypes.STRING,
        productionCompany: DataTypes.INTEGER,
        genre: DataTypes.STRING
    })
}