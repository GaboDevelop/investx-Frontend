const client = require('../../bd/connection.js');


async function getNecesidadById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM NECESIDAD WHERE idNecesidad = $1';
        const params = [id];
        const Necesidad = await client.query(sql, params);
        res.json({
            data: Necesidad
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createNecesidad(req, res) {

    try {
        const { idJustificacion, argumento } = req.body;

        const sql = 'INSERT INTO NECESIDAD (idJustificacion, argumento) VALUES ($1, $2)';
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

async function updateNecesidad(req, res) {

    try {
        const { id } = req.params;
        const { idJustificacion, argumento } = req.body;

        const sql = 'SELECT * FROM NECESIDAD WHERE idNecesidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Necesidad no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE NECESIDAD SET idJustificacion = $1, argumento = $2 WHERE idNecesidad = $3';
            const params2 = [idJustificacion, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Necesidad Updated',
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

async function deleteNecesidad(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM NECESIDAD WHERE idNecesidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Necesidad no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE NECESIDAD SET active = $1 WHERE idNecesidad = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Necesidad Updated',
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
    createNecesidad,
    updateNecesidad,
    deleteNecesidad,
    getNecesidadById
}