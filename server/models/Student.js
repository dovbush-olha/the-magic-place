const { sequelize, DataTypes } = require('../libraries/mysql');

const Student = sequelize.define('Student', {
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
  tableName: 'students'
});

Student.beforeUpdate(student => {
  student.updatedAt = new Date();
});

module.exports = Student;
