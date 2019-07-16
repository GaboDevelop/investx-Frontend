const client = require("../../bd/connection.js");

async function getJustificacion(req, res) {
  try {
    const sql = "SELECT * FROM JUSTIFICACION";

    const justificaciones = await client.query(sql);
    res.json({
      data: justificaciones
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function getJustificacionById(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM JUSTIFICACION WHERE idJustificacion = $1";
    const params = [id];
    const justificacion = await client.query(sql, params);
    res.json({
      data: justificacion
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function createJustificacion(req, res) {
  try {
    const {
      idTemporalidad,
      idContexto,
      idUnidadEstudio,
      idEvento,
      idTipoInvestigacion
    } = req.body;

    const sql =
      "INSERT INTO JUSTIFICACION (idTemporalidad, idContexto, idUnidadEstudio, idEvento, idTipoInvestigacion) VALUES ($1, $2, $3, $4, $5) RETURNING idJustificacion";
    const params = [
      idTemporalidad,
      idContexto,
      idUnidadEstudio,
      idEvento,
      idTipoInvestigacion
    ];
    const justificacion = await client.query(sql, params);
    res.json({
      data: justificacion
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function updateJustificacion(req, res) {
  try {
    const { id } = req.params;
    const {
      idTemporalidad,
      idContexto,
      idUnidadEstudio,
      idEvento,
      idTipoInvestigacion
    } = req.body;

    const sql = "SELECT * FROM JUSTIFICACION WHERE idJustificacion = $1";
    const params = [id];
    const justificacion = await client.query(sql, params);

    if ((justificacion.length = 0)) {
      return res.json({
        message: "Proyectiva no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE JUSTIFICACION SET idTemporalidad = $1, idContexto = $2, idUnidadEstudio = $3, idEvento = $4, idTipoInvestigacion = $5   WHERE idJustificacion = $6";
    const params2 = [
      idTemporalidad,
      idContexto,
      idUnidadEstudio,
      idEvento,
      idTipoInvestigacion,
      id
    ];
    const justificacioness = await client.query(sql2, params2);
    return res.json({
      message: "justificaciones Updated",
      data: justificacioness
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function deleteJustificacion(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM JUSTIFICACION WHERE idJustificacion = $1";
    const params = [id];
    const justificaciones = await client.query(sql, params);

    if ((justificaciones.length = 0)) {
      return res.json({
        message: "Justificacion no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE JUSTIFICACION SET active = $1  WHERE idJustificacion = $2";
    const params2 = [false, id];
    const justificacioness = await client.query(sql2, params2);
    return res.json({
      message: "justificaciones Updated",
      data: justificacioness
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
  getJustificacion: getJustificacion,
  getJustificacionById: getJustificacionById,
  createJustificacion: createJustificacion,
  updateJustificacion: updateJustificacion,
  deleteJustificacion: deleteJustificacion
};
