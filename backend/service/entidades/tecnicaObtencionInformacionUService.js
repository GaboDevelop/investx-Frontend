const client = require('../../bd/connection.js');


async function getTecnicaObtencionInformacionUById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TECNICA_OBTENCION_INFORMACION_U WHERE idTecnicaCondicion = $1';
        const params = [id];
        const TecnicaObtencionInformacionU = await client.query(sql, params);
        res.json({
            data: TecnicaObtencionInformacionU
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createTecnicaObtencionInformacionU(req, res) {

    try {
        const { idTecnicaObtencionInformacion, idUnidadEstudio } = req.body;

        const sql = 'INSERT INTO TECNICA_OBTENCION_INFORMACION_U  (idTecnicaObtencionInformacion, idUnidadEstudio) VALUES ($1, $2)';
        const params =  [idTecnicaObtencionInformacion, idUnidadEstudio];
        const users = await client.query(sql, params);
        res.json({
            data: users
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function updateTecnicaObtencionInformacionU(req, res) {

    try {
        const { id } = req.params;
        const { idTecnicaObtencionInformacion, idUnidadEstudio } = req.body;

        const sql = 'SELECT * FROM TECNICA_OBTENCION_INFORMACION_U WHERE idTecnicaCondicion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tecnica Obtencion Informacion U no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TECNICA_OBTENCION_INFORMACION_U SET idTecnicaObtencionInformacion = $1, idUnidadEstudio = $2 WHERE idTecnicaCondicion = $3';
            const params2 =  [idTecnicaObtencionInformacion, idUnidadEstudio, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tecnica Obtencion Informacion U Updated',
                data: user
            })
        

    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function deleteTecnicaObtencionInformacionU(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TECNICA_OBTENCION_INFORMACION_U WHERE idTecnicaCondicion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tecnica Obtencion Informacion U no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TECNICA_OBTENCION_INFORMACION_U SET active = $1 WHERE idTecnicaCondicion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tecnica Obtencion Informacion U Updated',
                data: user
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
    createTecnicaObtencionInformacionU,
    updateTecnicaObtencionInformacionU,
    deleteTecnicaObtencionInformacionU,
    getTecnicaObtencionInformacionUById
}