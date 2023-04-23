const { sequelize, DataTypes } = require('../../libraries/mysql');

const House = sequelize.define('House', {
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
  tableName: 'houses',
});

House.beforeUpdate(house => {
  house.updatedAt = new Date();
});

module.exports = House;
