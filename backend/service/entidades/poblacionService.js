const client = require('../../bd/connection.js');


async function getPoblacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM POBLACION WHERE idPoblacion = $1';
        const params = [id];
        const Poblacion = await client.query(sql, params);
        res.json({
            data: Poblacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createPoblacion(req, res) {

    try {
        const { poblacion } = req.body;

        const sql = 'INSERT INTO POBLACION (poblacion) VALUES ($1)';
        const params = [poblacion];
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

async function updatePoblacion(req, res) {

    try {
        const { id } = req.params;
        const { poblacion } = req.body;

        const sql = 'SELECT * FROM POBLACION WHERE idPoblacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Poblacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE POBLACION SET poblacion = $1 WHERE idPoblacion = $2';
            const params2 = [poblacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Poblacion Updated',
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

async function deletePoblacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM POBLACION WHERE idPoblacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Poblacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE POBLACION SET active = $1 WHERE idPoblacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Poblacion Updated',
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
    createPoblacion,
    updatePoblacion,
    deletePoblacion,
    getPoblacionById
}