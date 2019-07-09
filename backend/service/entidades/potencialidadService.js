const client = require('../../bd/connection.js');


async function getPotencialidadById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM POTENCIALIDAD WHERE idPotencialidad = $1';
        const params = [id];
        const Potencialidad = await client.query(sql, params);
        res.json({
            data: Potencialidad
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createPotencialidad(req, res) {

    try {
        const { idJustificacion, argumento } = req.body;

        const sql = 'INSERT INTO POTENCIALIDAD (idJustificacion, argumento) VALUES ($1, $2 )';
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

async function updatePotencialidad(req, res) {

    try {
        const { id } = req.params;
        const { idJustificacion, argumento } = req.body;

        const sql = 'SELECT * FROM POTENCIALIDAD WHERE idPotencialidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Potencialidad no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE POTENCIALIDAD SET idJustificacion = $1, argumento = $2 WHERE idPotencialidad = $3';
            const params2 = [idJustificacion, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Potencialidad Updated',
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

async function deletePotencialidad(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM POTENCIALIDAD WHERE idPotencialidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Potencialidad no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE POTENCIALIDAD SET active = $1 WHERE idPotencialidad = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Potencialidad Updated',
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
    createPotencialidad,
    updatePotencialidad,
    deletePotencialidad,
    getPotencialidadById
}