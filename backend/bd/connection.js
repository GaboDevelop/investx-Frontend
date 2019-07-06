const pg = require("pg");
/* const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = require("./config");

const connectionString = "postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"; */
const pass = "";
const connectionString = "postgres://postgres:"+pass+"@localhost:3360/prueba";

const client = new pg.Client(connectionString);

client.connect()
  .then(()=>{
    console.log('Conectado al servidor');
    const query = "SELECT * FROM usuario"
    return client.query(query);
  }).then((result)=>{
    console.log('result?',result);
  })
  .catch((err) => {
    console.log('err',err);
  });



module.exports = client;
