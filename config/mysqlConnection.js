const mysql = require('mysql2/promise"')();
const connection = await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud");

module.exports = connection;