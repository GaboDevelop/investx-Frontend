const client = require('../../bd/connection.js');


async function getComparacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM COMPARACION WHERE idComparacion = $1';
        const params = [id];
        const Comparacion = await client.query(sql, params);
        res.json({
            data: Comparacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createComparacion(req, res) {

    try {
        const { idFundamentoProyectivo, comparacion } = req.body;

        const sql = 'INSERT INTO COMPARACION (idFundamentoProyectivo, comparacion) VALUES ($1, $2)';
        const params = [idFundamentoProyectivo, comparacion];
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

async function updateComparacion(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, comparacion } = req.body;

        const sql = 'SELECT * FROM COMPARACION WHERE idComparacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Comparacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE COMPARACION SET idFundamentoProyectivo= $1, comparacion = $2 WHERE idComparacion = $3';
            const params2 = [idFundamentoProyectivo, comparacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Comparacion Updated',
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

async function deleteComparacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM COMPARACION WHERE idComparacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Comparacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE COMPARACION SET active = $1 WHERE idComparacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Comparacion Updated',
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
    createComparacion,
    updateComparacion,
    deleteComparacion,
    getComparacionById
}