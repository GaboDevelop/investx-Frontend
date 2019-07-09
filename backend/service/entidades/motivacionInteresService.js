const client = require('../../bd/connection.js');


async function getMotivacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM MOTIVACION_INTERES WHERE idMotivacion = $1';
        const params = [id];
        const Motivacion = await client.query(sql, params);
        res.json({
            data: Motivacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createMotivacion(req, res) {

    try {
        const { idJustificacion, argumento } = req.body;

        const sql = 'INSERT INTO MOTIVACION_INTERES (idJustificacion, argumento) VALUES ($1, $2)';
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

async function updateMotivacion(req, res) {

    try {
        const { id } = req.params;
        const { idJustificacion, argumento } = req.body;

        const sql = 'SELECT * FROM MOTIVACION_INTERES WHERE idMotivacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Motivacion Interes no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE MOTIVACION_INTERES SET idJustificacion = $1, argumento = $2 WHERE idMotivacion = $3';
            const params2 = [idJustificacion, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Motivacion Interes Updated',
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

async function deleteMotivacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM MOTIVACION_INTERES WHERE idMotivacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Motivacion Interes no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE MOTIVACION_INTERES SET active = $1 WHERE idMotivacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Motivacion Interes Updated',
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
    createMotivacion,
    updateMotivacion,
    deleteMotivacion,
    getMotivacionById
}