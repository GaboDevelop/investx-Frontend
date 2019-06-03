const mysql = require("mysql");
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = require("./config");

const mysqlConnection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true
});

mysqlConnection.connect(function(err) {
  if (err) {
    console.error(err);
    //return false;
  } else {
    console.log("base de datos conectada");
    //return true;
  }
});

module.exports = mysqlConnection;
