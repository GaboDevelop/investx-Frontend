const client = require('../../bd/connection.js');


async function getRolUsuarioById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ROL_USUARIO WHERE idRolUsuario = $1';
        const params = [id];
        const RolUsuario = await client.query(sql, params);
        res.json({
            data: RolUsuario
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createRolUsuario(req, res) {

    try {
        const { idUsuario, idRol } = req.body;

        const sql = 'INSERT INTO ROL_USUARIO (idUsuario, idRol) VALUES ($1, $2)';
        const params = [idUsuario, idRol];
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

async function updateRolUsuario(req, res) {

    try {
        const { id } = req.params;
        const { idUsuario, idRol } = req.body;

        const sql = 'SELECT * FROM ROL_USUARIO WHERE idRolUsuario = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Rol de Usuario no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ROL_USUARIO SET idUsuario = $1, idRol = $2 WHERE idRolUsuario = $3';
            const params2 = [idUsuario, idRol, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Rol de Usuario Updated',
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

async function deleteRolUsuario(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ROL_USUARIO WHERE idRolUsuario = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Rol de Usuario no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ROL_USUARIO SET active = $1 WHERE idRolUsuario = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Rol de Usuario Updated',
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
    createRolUsuario,
    updateRolUsuario,
    deleteRolUsuario,
    getRolUsuarioById
}