const client = require('../../bd/connection.js');


async function getCuriosidadById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CURIOSIDAD_PREOCUPACION WHERE idCuriosidad = $1';
        const params = [id];
        const Curiosidad = await client.query(sql, params);
        res.json({
            data: Curiosidad
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createCuriosidad(req, res) {

    try {
        const { idJustificacion, argumento } = req.body;

        const sql = 'INSERT INTO CURIOSIDAD_PREOCUPACION (idJustificacion, argumento) VALUES ($1, $2)';
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

async function updateCuriosidad(req, res) {

    try {
        const { id } = req.params;
        const { idJustificacion, argumento } = req.body;

        const sql = 'SELECT * FROM CURIOSIDAD_PREOCUPACION WHERE idCuriosidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Curiosidad Preocupacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CURIOSIDAD_PREOCUPACION SET idJustificacion= $1, argumentos = $2 WHERE idCuriosidad = $3';
            const params2 = [idJustificacion, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Curiosidad Preocupacion Updated',
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

async function deleteCuriosidad(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CURIOSIDAD_PREOCUPACION WHERE idCuriosidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Curiosidad Preocupacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CURIOSIDAD_PREOCUPACION SET active = $1 WHERE idCuriosidad = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Curiosidad Preocupacion Updated',
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
    createCuriosidad,
    updateCuriosidad,
    deleteCuriosidad,
    getCuriosidadById
}