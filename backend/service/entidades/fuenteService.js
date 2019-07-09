const client = require('../../bd/connection.js');


async function getFuenteById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUENTE WHERE idFuente = $1';
        const params = [id];
        const Fuente = await client.query(sql, params);
        res.json({
            data: Fuente
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createFuente(req, res) {

    try {
        const { idInstrumento, fuente } = req.body;

        const sql = 'INSERT INTO FUENTE (idInstrumento, fuente) VALUES ($1, $2)';
        const params = [idInstrumento, fuente];
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

async function updateFuente(req, res) {

    try {
        const { id } = req.params;
        const { idInstrumento, fuente } = req.body;

        const sql = 'SELECT * FROM FUENTE WHERE idFuente = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Fuente no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUENTE SET idInstrumento = $1, fuente = $2 WHERE idFuente = $3';
            const params2 = [idInstrumento, fuente, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Fuente Updated',
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

async function deleteFuente(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUENTE WHERE idFuente = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Fuente no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUENTE SET active = $1 WHERE idFuente = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Fuente Updated',
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
    createFuente,
    updateFuente,
    deleteFuente,
    getFuenteById
}