module.exports = (sequelize, DataTypes) => {
    return sequelize.define('companies', {
        companyname: DataTypes.STRING
    });
}