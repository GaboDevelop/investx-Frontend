const client = require('../../bd/connection.js');


async function getClaseEventoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CLASE_EVENTO WHERE idClaseEvento = $1';
        const params = [id];
        const ClaseEvento = await client.query(sql, params);
        res.json({
            data: ClaseEvento
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createClaseEvento(req, res) {

    try {
        const { clase } = req.body;

        const sql = 'INSERT INTO CLASE_EVENTO (clase) VALUES ($1)';
        const params = [clase];
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

async function updateClaseEvento(req, res) {

    try {
        const { id } = req.params;
        const { clase } = req.body;

        const sql = 'SELECT * FROM CLASE_EVENTO WHERE idClaseEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Clase Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CLASE_EVENTO SET clase = $1 WHERE idClaseEvento = $2';
            const params2 = [clase, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Clase Evento Updated',
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

async function deleteClaseEvento(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CLASE_EVENTO WHERE idClaseEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Clase Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CLASE_EVENTO SET active = $1 WHERE idClaseEvento = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Clase Evento Updated',
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
    createClaseEvento,
    updateClaseEvento,
    deleteClaseEvento,
    getClaseEventoById
}