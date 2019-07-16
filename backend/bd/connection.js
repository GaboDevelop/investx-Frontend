const pg = require("pg");
/* const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = require("./config");

const connectionString = "postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"; */
/*const pass = "1234";
const connectionString = "postgres://root:" + pass + "@localhost:50828/investx";

const client = new pg.Client(connectionString);*/

const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "investx2",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

pool.connect((err, client, release) => {
  if (err) {
    return console.log(err.stack);
  }
  console.log("conectado con base de datos ");
});

/*client
  .connect()
  .then(() => {
    console.log("Conectado al servidor");
  })
  .catch(err => {
    console.log("err", err);
  });
console.log(client.connect());*/
module.exports = pool;
