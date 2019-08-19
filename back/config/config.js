const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: "alpaca",
    password: process.env.DB_PASSWORD,
    database: "nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "alpaca",
    password: process.env.DB_PASSWORD,
    database: "nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "alpaca",
    password: process.env.DB_PASSWORD,
    database: "nodebird",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};
