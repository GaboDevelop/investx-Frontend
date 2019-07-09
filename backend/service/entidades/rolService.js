const client = require('../../bd/connection.js');


async function getRolById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ROL WHERE idRol = $1';
        const params = [id];
        const Rol = await client.query(sql, params);
        res.json({
            data: Rol
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createRol(req, res) {

    try {
        const { nombreRol } = req.body;

        const sql = 'INSERT INTO ROL (nombreRol) VALUES ($1)';
        const params = [nombreRol];
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

async function updateRol(req, res) {

    try {
        const { id } = req.params;
        const { nombreRol } = req.body;

        const sql = 'SELECT * FROM ROL WHERE idRol = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Rol no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ROL SET nombreRol = $1 WHERE idRol = $2';
            const params2 = [nombreRol, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Rol Updated',
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

async function deleteRol(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ROL WHERE idRol = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Rol no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ROL SET active = $1 WHERE idRol = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Rol Updated',
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
    createRol,
    updateRol,
    deleteRol,
    getRolById
}