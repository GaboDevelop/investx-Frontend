const client = require("../../bd/connection.js");

async function getTemaInvestigacionById(req, res) {
  try {
    const { id } = req.params;

    const sql =
      "SELECT * FROM TEMA_INVESTIGACION WHERE idTemaInvestigacion = $1";
    const params = [id];
    const TemaInvestigacion = await client.query(sql, params);
    res.json({
      data: TemaInvestigacion
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function createTemaInvestigacion(req, res) {
  try {
    console.log(req.body);
    const idTipoInvestigacion = parseInt(req.body.idtipoinvestigacion, 10);
    const idNivelInvestigacion = parseInt(req.body.idnivelinvestigacion, 10);
    const {
      idUsuario,
      temaIncompleto,
      tema,
      situacionPreocupante,
      conexionOtrosTemas
    } = req.body;

    const sql =
      "INSERT INTO TEMA_INVESTIGACION (idUsuario, idNivelInvestigacion, idTipoInvestigacion, temaIncompleto, tema, situacionPreocupante, conexionOtrosT ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING idtemainvestigacion";
    const params = [
      idUsuario,
      idNivelInvestigacion,
      idTipoInvestigacion,
      temaIncompleto,
      tema,
      situacionPreocupante,
      conexionOtrosTemas
    ];
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

async function updateTemaInvestigacion(req, res) {
  try {
    const { id } = req.params;
    const {
      idUsuario,
      idNivelInvestigacion,
      idTipoInvestigacion,
      temaIncompleto,
      tema,
      situacionPreocupante,
      conexionOtrosT
    } = req.body;

    const sql =
      "SELECT * FROM TEMA_INVESTIGACION WHERE idTemaInvestigacion = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Tema Investigacion no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE TEMA_INVESTIGACION SET idUsuario = $1, idNivelInvestigacion = $2, idTipoInvestigacion = $3, temaIncompleto= $4, tema = $5, situacionPreocupante = $6, conexionOtrosT = $7 WHERE idTemaInvestigacion = $8";
    const params2 = [
      idUsuario,
      idNivelInvestigacion,
      idTipoInvestigacion,
      temaIncompleto,
      tema,
      situacionPreocupante,
      conexionOtrosT,
      id
    ];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Tema Investigacion Updated",
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

async function deleteTemaInvestigacion(req, res) {
  try {
    const { id } = req.params;

    const sql =
      "SELECT * FROM TEMA_INVESTIGACION WHERE idTemaInvestigacion = $1";
    const params = [id];
    const users = await client.query(sql, params);

    if ((users.length = 0)) {
      return res.json({
        message: "Tema Investigacion no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE TEMA_INVESTIGACION SET active = $1 WHERE idTemaInvestigacion = $2";
    const params2 = [false, id];
    const user = await client.query(sql2, params2);
    return res.json({
      message: "Tema Investigacion Updated",
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
  createTemaInvestigacion,
  updateTemaInvestigacion,
  deleteTemaInvestigacion,
  getTemaInvestigacionById
};
