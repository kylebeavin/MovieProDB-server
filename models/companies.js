module.exports = (sequelize, DataTypes) => {
    return sequelize.define('companies', {
        companyName: DataTypes.STRING
    });
}