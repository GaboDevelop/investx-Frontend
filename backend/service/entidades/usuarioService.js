
const client = require('../../bd/connection.js');


async function getUsers(req, res) {

    try {
        const sql = 'SELECT * FROM USUARIO';
        
        const users = await client.query(sql);
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

async function getUserById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM USUARIO WHERE idUsuario = $1';
        const params = [id];
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
async function getUserByCorreo(req, res) {

    try {
        const { correo } = req.params;

        const sql = 'SELECT * FROM USUARIO WHERE correo = $1';
        const params = [correo];
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

async function createUser(req, res) {

    try {
        const { correo, contrasena, nombre, segundoNombre, apellido, segundoApellido } = req.body;

        const sql = 'INSERT INTO USUARIO (correo, contrasena, nombre, segundoNombre, apellido,segundoApellido) VALUES ($1, $2, $3, $4, $5, $6)';
        const params = [correo, contrasena, nombre, segundoNombre, apellido, segundoApellido];
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

async function updateUser(req, res) {

    try {
        const { id } = req.params;
        const { correo, contrasena, nombre, segundoNombre, apellido, segundoApellido } = req.body;

        const sql = 'SELECT * FROM USUARIO WHERE idUsuario = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'User no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE USUARIO SET correo = $1, contrasena = $2, nombre = $3, segundoNombre = $4, apellido = $5, segundoApellido = $6 WHERE idUsuario = $7';
            const params2 = [correo, contrasena, nombre, segundoNombre, apellido, segundoApellido, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'User Updated',
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

async function deleteUser(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM USUARIO WHERE idUsuario = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'User no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE USUARIO SET active = $1 WHERE idUsuario = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'User Updated',
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


async function getUsersAndRoles(req, res) { // NO SE POR QUE DA ERROR

    try {
        console.log('Estoy entrando en getUsersAndRoles'); 
        const sql = 'SELECT U.idUsuario, U.correo, U.contrasena, U.nombre, U.segundoNombre, U.apellido, U.segundoApellido, R.nombreRol, U.active FROM USUARIO U INNER JOIN ROL_USUARIO RU ON U.idUsuario = RU.idUsuario INNER JOIN ROL R ON R.idRol = RU.idRol' ;
        const users = await client.query(sql);
        console.log(users);
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


module.exports = {
    getUsers: getUsers,
    getUserById: getUserById, 
    createUser: createUser, 
    updateUser: updateUser,
    deleteUser: deleteUser,
    getUserByCorreo:getUserByCorreo,
    getUsersAndRoles: getUsersAndRoles

}