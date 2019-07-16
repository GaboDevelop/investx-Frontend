const client = require("../../bd/connection.js");

async function getConsecuenciaById(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM CONSECUENCIA WHERE idConsecuencia = $1";
    const params = [id];
    const Consecuencia = await client.query(sql, params);
    res.json({
      data: Consecuencia
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function getConsecuencias(req, res) {
  try {
    const sql = "SELECT * FROM CONSECUENCIA";
    const consecuencias = await client
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

async function createConsecuencia(req, res) {
  try {
    const { consecuencia } = req.body;

    const sql =
      "INSERT INTO CONSECUENCIA (consecuencia) VALUES ($1) RETURNING idconsecuencia";
    const params = [consecuencia];
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

async function updateConsecuencia(req, res) {
  try {
    const { id } = req.params;
    const { consecuencia } = req.body;

    const sql = "SELECT * FROM CONSECUENCIA WHERE idConsecuencia = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Consecuencia no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE CONSECUENCIA SET consecuencia = $1 WHERE idConsecuencia = $2";
    const params2 = [consecuencia, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Consecuencia Updated",
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

async function deleteConsecuencia(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM CONSECUENCIA WHERE idConsecuencia = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Consecuencia no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE CONSECUENCIA SET active = $1 WHERE idConsecuencia = $2";
    const params2 = [false, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Consecuencia Updated",
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
  createConsecuencia,
  updateConsecuencia,
  deleteConsecuencia,
  getConsecuenciaById,
  getConsecuencias
};
