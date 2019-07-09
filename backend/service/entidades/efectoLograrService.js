const client = require('../../bd/connection.js');


async function getEfectoLograrById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM EFECTO_LOGRAR WHERE idEfectoLograr = $1';
        const params = [id];
        const EfectoLograr = await client.query(sql, params);
        res.json({
            data: EfectoLograr
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createEfectoLograr(req, res) {

    try {
        const { idFundamentoProyectivo, efecto } = req.body;

        const sql = 'INSERT INTO EFECTO_LOGRAR (idFundamentoProyectivo, efecto) VALUES ($1, $2)';
        const params = [idFundamentoProyectivo, efecto];
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

async function updateEfectoLograr(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, efecto } = req.body;

        const sql = 'SELECT * FROM EFECTO_LOGRAR WHERE idEfectoLograr = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Efecto a Lograr no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE EFECTO_LOGRAR SET idFundamentoProyectivo= $1, efecto = $2 WHERE idEfectoLograr = $3';
            const params2 = [idFundamentoProyectivo, efecto, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Efecto a Lograr Updated',
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

async function deleteEfectoLograr(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM EFECTO_LOGRAR WHERE idEfectoLograr = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Efecto a Lograr no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE EFECTO_LOGRAR SET active = $1 WHERE idEfectoLograr = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Efecto a Lograr Updated',
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
    createEfectoLograr,
    updateEfectoLograr,
    deleteEfectoLograr,
    getEfectoLograrById
}