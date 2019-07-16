const client = require("../../bd/connection.js");

async function getEventos(req, res) {
  try {
    const sql = "SELECT * FROM EVENTO";

    const eventos = await client.query(sql);
    res.json({
      data: eventos
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function getEventoById(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM EVENTO WHERE idEvento = $1";
    const params = [id];
    const evento = await client.query(sql, params);
    res.json({
      data: evento
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function createEvento(req, res) {
  try {
    const { idClaseEvento, evento ,parametro} = req.body;

    const sql =
      "INSERT INTO EVENTO (idClaseEvento, evento , parametro) VALUES ($1, $2, $3) RETURNING idEvento";
    const params = [idClaseEvento, evento, parametro];
    const eventos = await client.query(sql, params);
    res.json({
      data: eventos
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function updateEvento(req, res) {
  try {
    const { id } = req.params;
    const { idClaseEvento, evento } = req.body;
    const sql = "SELECT * FROM EVENTO WHERE idEvento = $1";
    const params = [id];
    const eventos = await client.query(sql, params);

    if ((eventos.length = 0)) {
      return res.json({
        message: "Evento no existe",
        data: {}
      });
    }
    const sql2 =
      "UPDATE EVENTO SET idClaseEvento = $1, evento = $2  WHERE idEvento = $3";
    const params2 = [idClaseEvento, evento, id];
    const eventoss = await client.query(sql2, params2);
    return res.json({
      message: "Eventos Updated",
      data: eventoss
    });
  } catch (error) {
    console.log(error);
    res.json({
      data: {},
      message: "Something goes wrong"
    });
  }
}

async function deleteEvento(req, res) {
  try {
    const { id } = req.params;

    const sql = "SELECT * FROM EVENTO WHERE idEvento = $1";
    const params = [id];
    const eventos = await client.query(sql, params);

    if ((eventos.length = 0)) {
      return res.json({
        message: "Evento no existe",
        data: {}
      });
    }
    const sql2 = "UPDATE EVENTO SET active = $1  WHERE idEvento = $2";
    const params2 = [false, id];
    const eventoss = await client.query(sql2, params2);
    return res.json({
      message: "eventos Updated",
      data: eventoss
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
  getEventos: getEventos,
  getEventoById: getEventoById,
  createEvento: createEvento,
  updateEvento: updateEvento,
  deleteEvento: deleteEvento
};
