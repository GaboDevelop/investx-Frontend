const client = require('../../bd/connection.js');

async function getHistorialModificacionesByTemaInvestigacion(req, res) {

    try {
        const { idTemaInvestigacion} = req.params;
        const sql = 'SELECT V.idVersion, TI.idTemaInvestigacion, V.fecha FROM VERSION V JOIN TEMA_INVESTIGACION TI ON V.idTemaInvestigacion = TI.idTemaInvestigacion WHERE TI.idTemaInvestigacion = $1';
        const params = [idTemaInvestigacion];
        const table = await client.query(sql, params);
        res.json({
            data: table
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

module.exports = {
    getHistorialModificacionesByTemaInvestigacion: getHistorialModificacionesByTemaInvestigacion
}