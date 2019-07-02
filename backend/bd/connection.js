const pg = require("pg");
/* const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = require("./config");

const connectionString = "postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"; */
const pass = "";
const connectionString = "postgres://root:"+pass+"@localhost:3360/practica";

const client = new pg.Client(connectionString);

client.connect().catch((err) => {
    console.log('err',err);
});

module.exports = client;
