const client = require('../../bd/connection.js');


async function getTemporalidadMedicionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TEMPORALIDAD_MEDICION WHERE idTemporalidadMedicion = $1';
        const params = [id];
        const TemporalidadMedicion = await client.query(sql, params);
        res.json({
            data: TemporalidadMedicion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createTemporalidadMedicion(req, res) {

    try {
        const { temporalidad } = req.body;

        const sql = 'INSERT INTO TEMPORALIDAD_MEDICION (temporalidad) VALUES ($1) RETURNING idtemporalidad';
        const params = [temporalidad];
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

async function updateTemporalidadMedicion(req, res) {

    try {
        const { id } = req.params;
        const { temporalidad } = req.body;

        const sql = 'SELECT * FROM TEMPORALIDAD_MEDICION WHERE idTemporalidadMedicion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Temporalidad Medicion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TEMPORALIDAD_MEDICION SET temporalidad = $1 WHERE idTemporalidadMedicion = $2';
            const params2 = [temporalidad, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Temporalidad Medicion Updated',
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

async function deleteTemporalidadMedicion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TEMPORALIDAD_MEDICION WHERE idTemporalidadMedicion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Temporalidad Medicion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TEMPORALIDAD_MEDICION SET active = $1 WHERE idTemporalidadMedicion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Temporalidad Medicion Updated',
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
    createTemporalidadMedicion,
    updateTemporalidadMedicion,
    deleteTemporalidadMedicion,
    getTemporalidadMedicionById
}