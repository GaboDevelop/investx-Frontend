const client = require('../../bd/connection.js');


async function getTemporalidadMedicionContextoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TEMPORALIDAD_MEDICION_CONTEXTO WHERE idTemporalidadContexto = $1';
        const params = [id];
        const TemporalidadMedicionContexto = await client.query(sql, params);
        res.json({
            data: TemporalidadMedicionContexto
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createTemporalidadMedicionContexto(req, res) {

    try {
        const { idTemporalidad, idContexto, argumento } = req.body;

        const sql = 'INSERT INTO TEMPORALIDAD_MEDICION_CONTEXTO (idTemporalidad, idContexto, argumento) VALUES ($1, $2, $3)';
        const params = [idTemporalidad, idContexto, argumento];
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

async function updateTemporalidadMedicionContexto(req, res) {

    try {
        const { id } = req.params;
        const { idTemporalidad, idContexto, argumento } = req.body;

        const sql = 'SELECT * FROM TEMPORALIDAD_MEDICION_CONTEXTO WHERE idTemporalidadContexto = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Temporalidad Medicion Contexto no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TEMPORALIDAD_MEDICION_CONTEXTO SET idTemporalida = $1, idContexto = $2, argumento = $3 WHERE idTemporalidadContexto = $4';
            const params2 = [idTemporalidad, idContexto, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Temporalidad Medicion Contexto Updated',
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

async function deleteTemporalidadMedicionContexto(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TEMPORALIDAD_MEDICION_CONTEXTO WHERE idTemporalidadContexto = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Temporalidad Medicion Contexto no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TEMPORALIDAD_MEDICION_CONTEXTO SET active = $1 WHERE idTemporalidadContexto = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Temporalidad Medicion Contexto Updated',
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
    createTemporalidadMedicionContexto,
    updateTemporalidadMedicionContexto,
    deleteTemporalidadMedicionContexto,
    getTemporalidadMedicionContextoById
}