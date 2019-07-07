// USUARIO
const client = require('../bd/connection.js');


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


module.exports = {
    getUsers: getUsers
}