const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.dbName, 'postgres', process.env.dbPassword, {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize.authenticate().then(
  () => console.log('Connected to Iridium postgres database'),
  err => console.log(err)
)

module.exports = sequelize;