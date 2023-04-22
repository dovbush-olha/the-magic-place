const { Sequelize, Op, DataTypes } = require('sequelize');

const dbConfig = {
  db: process.env.MYSQL_DATABASE ?? 'testhp',
  user: process.env.MYSQL_USER ?? 'adm',
  password: process.env.MYSQL_PASSWORD ?? 'adm!23',
  options: {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 60_000,
      idle: 10_000
    },
    logging: false
  },
};

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, dbConfig.options);

module.exports = { sequelize, Op, DataTypes };
