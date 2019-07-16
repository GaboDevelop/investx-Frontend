const client = require("../../bd/connection.js");

async function getInstrumentoById(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM INSTRUMENTO WHERE idInstrumento = $1";
    const params = [id];
    const Instrumento = await client.query(sql, params);
    res.json({
      data: Instrumento
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function createInstrumento(req, res) {
  try {
    const { idEvento, instrumento, nivelInstrumento } = req.body;

    const sql =
      "INSERT INTO INSTRUMENTO (idevento,instrumento,nivel) VALUES ($1,$2,$3) RETURNING idInstrumento";
    const params = [idEvento, instrumento, nivelInstrumento];
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

async function updateInstrumento(req, res) {
  try {
    const { id } = req.params;
    const { gradoParticipacion } = req.body;

    const sql = "SELECT * FROM INSTRUMENTO WHERE idInstrumento = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Instrumento no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE INSTRUMENTO SET gradoParticipacion = $1 WHERE idInstrumento = $2";
    const params2 = [gradoParticipacion, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Instrumento Updated",
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

async function deleteInstrumento(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM INSTRUMENTO WHERE idInstrumento = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Instrumento no existe",
        data: {}
      });
    }
    const sql2 = "UPDATE INSTRUMENTO SET active = $1 WHERE idInstrumento = $2";
    const params2 = [false, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Instrumento Updated",
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
  createInstrumento,
  updateInstrumento,
  deleteInstrumento,
  getInstrumentoById
};
