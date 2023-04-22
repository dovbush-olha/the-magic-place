const { sequelize, DataTypes } = require('../libraries/mysql');

const Spell = sequelize.define('Spell', {
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
  tableName: 'spells'
});

Spell.beforeUpdate(spell => {
  spell.updatedAt = new Date();
});

module.exports = Spell;
