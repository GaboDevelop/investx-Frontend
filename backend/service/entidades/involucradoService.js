const client = require("../../bd/connection.js");

async function getInvolucradoById(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM INVOLUCRADO WHERE idInvolucrado = $1";
    const params = [id];
    const Involucrado = await client.query(sql, params);
    res.json({
      data: Involucrado
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function getInvolucrados(req, res) {
  try {
    const sql = "SELECT * FROM INVOLUCRADO";
    const involucrados = await client
      .query(sql)
      .then(response => {
        res.json({
          data: response.rows
        });
      })
      .catch(err => {
        client.end();
      });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function createInvolucrado(req, res) {
  try {
    const { involucrado } = req.body;
    console.log(involucrado);
    const sql =
      "INSERT INTO INVOLUCRADO (involucrado) VALUES ($1) RETURNING idinvolucrado";
    const params = [involucrado];
    const users = await client.query(sql, params);
    res.json({
      data: users
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function updateInvolucrado(req, res) {
  try {
    const { id } = req.params;
    const { involucrado } = req.body;

    const sql = "SELECT * FROM INVOLUCRADO WHERE idInvolucrado = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Involucrado no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE INVOLUCRADO SET involucrado = $1 WHERE idInvolucrado = $2";
    const params2 = [involucrado, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Involucrado Updated",
      data: user
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function deleteInvolucrado(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM INVOLUCRADO WHERE idInvolucrado = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Involucrado no existe",
        data: {}
      });
    }
    const sql2 = "UPDATE INVOLUCRADO SET active = $1 WHERE idInvolucrado = $2";
    const params2 = [false, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Involucrado Updated",
      data: user
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

module.exports = {
  createInvolucrado,
  updateInvolucrado,
  deleteInvolucrado,
  getInvolucradoById,
  getInvolucrados
};
