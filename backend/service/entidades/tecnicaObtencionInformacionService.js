const client = require('../../bd/connection.js');


async function getTecnicaObtencionInformacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TECNICA_OBTENCION_INFORMACION WHERE idTecnicaObtencionInformacion = $1';
        const params = [id];
        const TecnicaObtencionInformacion = await client.query(sql, params);
        res.json({
            data: TecnicaObtencionInformacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createTecnicaObtencionInformacion(req, res) {

    try {
        const { tecnica } = req.body;

        const sql = 'INSERT INTO TECNICA_OBTENCION_INFORMACION (tecnica) VALUES ($1)';
        const params = [tecnica];
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

async function updateTecnicaObtencionInformacion(req, res) {

    try {
        const { id } = req.params;
        const { tecnica } = req.body;

        const sql = 'SELECT * FROM TECNICA_OBTENCION_INFORMACION WHERE idTecnicaObtencionInformacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tecnica Obtencion de Informacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TECNICA_OBTENCION_INFORMACION SET tecnica= $1 WHERE idTecnicaObtencionInformacion = $2';
            const params2 = [tecnica, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tecnica Obtencion de Informacion Updated',
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

async function deleteTecnicaObtencionInformacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TECNICA_OBTENCION_INFORMACION WHERE idTecnicaObtencionInformacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tecnica Obtencion de Informacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TECNICA_OBTENCION_INFORMACION SET active = $1 WHERE idTecnicaObtencionInformacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tecnica Obtencion de Informacion Updated',
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
    createTecnicaObtencionInformacion,
    updateTecnicaObtencionInformacion,
    deleteTecnicaObtencionInformacion,
    getTecnicaObtencionInformacionById
}