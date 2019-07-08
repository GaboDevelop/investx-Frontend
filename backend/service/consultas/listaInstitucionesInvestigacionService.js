const client = require('../../bd/connection.js');

async function getListaInstitucionesInvestigacionByRol(req, res) {

    try {
        const { idRol } = req.params;
        const sql = 'SELECT U.nombre FROM USUARIO U JOIN ROL_USUARIO RU ON U.idUsuario = RU.idUsuario JOIN ROL R ON R.idRol = RU.idRol WHERE R.idRol = $1';
        const params = [ idRol];
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
    getListaInstitucionesInvestigacionByRol: getListaInstitucionesInvestigacionByRol
}