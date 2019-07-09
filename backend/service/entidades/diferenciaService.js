const client = require('../../bd/connection.js');


async function getDiferenciaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DIFERENCIA WHERE idDiferencia = $1';
        const params = [id];
        const Diferencia = await client.query(sql, params);
        res.json({
            data: Diferencia
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createDiferencia(req, res) {

    try {
        const { diferencia } = req.body;

        const sql = 'INSERT INTO DIFERENCIA (diferencia) VALUES ($1)';
        const params = [diferencia];
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

async function updateDiferencia(req, res) {

    try {
        const { id } = req.params;
        const { diferencia } = req.body;

        const sql = 'SELECT * FROM DIFERENCIA WHERE idDiferencia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Diferencia no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DIFERENCIA SET diferencia= $1 WHERE idDiferencia = $2';
            const params2 = [diferencia, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Diferencia Updated',
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

async function deleteDiferencia(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DIFERENCIA WHERE idDiferencia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Diferencia no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DIFERENCIA SET active = $1 WHERE idDiferencia = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Diferencia Updated',
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
    createDiferencia,
    updateDiferencia,
    deleteDiferencia,
    getDiferenciaById
}