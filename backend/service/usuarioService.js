// USUARIO
const client = require('/../bd/connection.js');


module.exports = async function getUses(req, res) {

    try {
        const sql = 'SELECT * FROM USUARIOS';
        const params = ['idUsuario','correo','contrasena','nombre','segundoNombre','apellido', 'segundoApellido','active'];
        const users = await client.query(sql,params);
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
