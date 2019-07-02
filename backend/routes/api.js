const API_PATH = "/api";
const pgConnection = require("../bd/connection");

module.exports = app => {
  app.get(`${API_PATH}/usuarios`, (req, res) => {
    pgConnection.query("SELECT * FROM usuario", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
};
