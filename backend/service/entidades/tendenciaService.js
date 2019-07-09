const client = require('../../bd/connection.js');


async function getTendenciaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TENDENCIA WHERE idTendencia = $1';
        const params = [id];
        const Tendencia = await client.query(sql, params);
        res.json({
            data: Tendencia
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createTendencia(req, res) {

    try {
        const { idJustificacion, argumento } = req.body;

        const sql = 'INSERT INTO TENDENCIA (idJustificacion, argumento) VALUES ($1, $2)';
        const params = [idJustificacion, argumento];
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

async function updateTendencia(req, res) {

    try {
        const { id } = req.params;
        const { idJustificacion, argumento } = req.body;

        const sql = 'SELECT * FROM TENDENCIA WHERE idTendencia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tendencia no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TENDENCIA SET idJustificacion= $1, argumento = $2 WHERE idTendencia = $3';
            const params2 = [idJustificacion, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tendencia Updated',
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

async function deleteTendencia(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TENDENCIA WHERE idTendencia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tendencia no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TENDENCIA SET active = $1 WHERE idTendencia = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tendencia Updated',
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
    createTendencia,
    updateTendencia,
    deleteTendencia,
    getTendenciaById
}