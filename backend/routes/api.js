/* const API_PATH = "/api";
const client = require("../bd/connection");

module.exports = app => {
  app.get(`${API_PATH}/usuarios`, (req, res) => {
    client.query("SELECT * FROM usuario", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
}; */


const { Router } = require('express');
const router = Router();

const { getUsers } = require('../service/usuarioService.js');

router.get('/',getUsers);



module.exports = router;