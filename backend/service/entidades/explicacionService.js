const client = require('../../bd/connection.js');


async function getExplicacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM EXPLICACION WHERE idExplicacion = $1';
        const params = [id];
        const Explicacion = await client.query(sql, params);
        res.json({
            data: Explicacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createExplicacion(req, res) {

    try {
        const { idFundamentoProyectivo, explicacion } = req.body;

        const sql = 'INSERT INTO EXPLICACION (idFundamentoProyectivo, explicacion) VALUES ($1, $2)';
        const params = [idFundamentoProyectivo, explicacion];
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

async function updateExplicacion(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, explicacion } = req.body;

        const sql = 'SELECT * FROM EXPLICACION WHERE idExplicacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Explicacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE EXPLICACION SET idFundamentoProyectivo= $1, explicacion = $2 WHERE idExplicacion = $3';
            const params2 = [idFundamentoProyectivo, explicacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Explicacion Updated',
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

async function deleteExplicacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM EXPLICACION WHERE idExplicacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Explicacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE EXPLICACION SET active = $1 WHERE idExplicacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Explicacion Updated',
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
    createExplicacion,
    updateExplicacion,
    deleteExplicacion,
    getExplicacionById
}