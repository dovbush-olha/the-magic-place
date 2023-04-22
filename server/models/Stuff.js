const { sequelize, DataTypes } = require('../libraries/mysql');

const Stuff = sequelize.define('Stuff', {
  id: {
    type: DataTypes.SMALLINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  UK: {
    type: DataTypes.JSON,
  },
  EN: {
    type: DataTypes.JSON,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },

}, {
  tableName: 'stuff'
});

Stuff.beforeUpdate(stuff => {
  stuff.updatedAt = new Date();
});

module.exports = Stuff;
