const client = require('../../bd/connection.js');


async function getEstadioById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ESTADIO WHERE idEstadio = $1';
        const params = [id];
        const Estadio = await client.query(sql, params);
        res.json({
            data: Estadio
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createEstadio(req, res) {

    try {
        const { estadio } = req.body;

        const sql = 'INSERT INTO ESTADIO (estadio) VALUES ($1)';
        const params = [estadio];
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

async function updateEstadio(req, res) {

    try {
        const { id } = req.params;
        const { estadio } = req.body;

        const sql = 'SELECT * FROM ESTADIO WHERE idEstadio = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Estadio no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ESTADIO SET estadio = $1 WHERE idEstadio = $2';
            const params2 = [estadio, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Estadio Updated',
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

async function deleteEstadio(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ESTADIO WHERE idEstadio = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Estadio no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ESTADIO SET active = $1 WHERE idEstadio = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Estadio Updated',
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
    createEstadio,
    updateEstadio,
    deleteEstadio,
    getEstadioById
}