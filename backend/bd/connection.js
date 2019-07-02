const pg = require("pg");
/* const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = require("./config");

const connectionString = "postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"; */
const pass = "";
const connectionString = "postgres://root:"+pass+"@localhost:3360/practica${DB_NAME}";

const client = new pg.Client(connectionString);

client.connect(function(err) {
  if (err) {
    console.error(err);
    //return false;
  } else {
    console.log("base de datos conectada");
    //return true;
  }
});

module.exports = client;
