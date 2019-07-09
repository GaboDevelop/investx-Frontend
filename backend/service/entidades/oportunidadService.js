const client = require('../../bd/connection.js');


async function getOportunidadById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM OPORTUNIDAD WHERE idOportunidad = $1';
        const params = [id];
        const Oportunidad = await client.query(sql, params);
        res.json({
            data: Oportunidad
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createOportunidad(req, res) {

    try {
        const { idJustificacion, argumento } = req.body;

        const sql = 'INSERT INTO OPORTUNIDAD (idJustificacion, argumento) VALUES ($1, $2)';
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

async function updateOportunidad(req, res) {

    try {
        const { id } = req.params;
        const { idJustificacion, argumento } = req.body;

        const sql = 'SELECT * FROM OPORTUNIDAD WHERE idOportunidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Oportunidad no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE OPORTUNIDAD SET idJustificacion = $1, argumento = $2 WHERE idOportunidad = $3';
            const params2 = [idJustificacion, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Oportunidad Updated',
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

async function deleteOportunidad(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM OPORTUNIDAD WHERE idOportunidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Oportunidad no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE OPORTUNIDAD SET active = $1 WHERE idOportunidad = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'OPORTUNIDAD Updated',
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
    createOportunidad,
    updateOportunidad,
    deleteOportunidad,
    getOportunidadById
}