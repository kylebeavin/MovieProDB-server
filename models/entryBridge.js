const Scene = require('./scene');
const sequelizedb = require('../db');
const sequelize = require('sequelize');

const Entry = (sequelize, DataTypes) => {
  return sequelize.define('entry', {
    scene_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    entryCreator_id: DataTypes.INTEGER,
    lastEditor_id: DataTypes.INTEGER
  })
}

// Entry.belongsTo(Scene(sequelizedb, sequelize));

module.exports = Entry;