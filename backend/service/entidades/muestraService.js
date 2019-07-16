const client = require("../../bd/connection.js");

async function getMuestraById(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM MUESTRA WHERE idMuestra = $1";
    const params = [id];
    const Muestra = await client.query(sql, params);
    res.json({
      data: Muestra
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function createMuestra(req, res) {
  try {
    const { muestra } = req.body;

    const sql = "INSERT INTO MUESTRA (muestra) VALUES ($1) RETURNING idmuestra";
    const params = [muestra];
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

async function updateMuestra(req, res) {
  try {
    const { id } = req.params;
    const { muestra } = req.body;

    const sql = "SELECT * FROM MUESTRA WHERE idMuestra = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Muestra no existe",
        data: {}
      });
    }
    const sql2 = "UPDATE MUESTRA SET muestra = $1 WHERE idMuestra = $2";
    const params2 = [muestra, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Muestra Updated",
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

async function deleteMuestra(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM MUESTRA WHERE idMuestra = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Muestra no existe",
        data: {}
      });
    }
    const sql2 = "UPDATE MUESTRA SET active = $1 WHERE idMuestra = $2";
    const params2 = [false, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Muestra Updated",
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
  createMuestra,
  updateMuestra,
  deleteMuestra,
  getMuestraById
};
