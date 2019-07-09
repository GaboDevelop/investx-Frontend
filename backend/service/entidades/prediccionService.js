const client = require('../../bd/connection.js');


async function getPrediccionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PREDICCION WHERE idPrediccion = $1';
        const params = [id];
        const Prediccion = await client.query(sql, params);
        res.json({
            data: Prediccion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createPrediccion(req, res) {

    try {
        const { idFundamentoProyectivo, prediccion } = req.body;

        const sql = 'INSERT INTO PREDICCION (idFundamentoProyectivo, prediccion) VALUES ($1, $2)';
        const params = [idFundamentoProyectivo, prediccion];
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

async function updatePrediccion(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, prediccion } = req.body;

        const sql = 'SELECT * FROM PREDICCION WHERE idPrediccion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Prediccion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PREDICCION SET idFundamentoProyectivo= $1, prediccion = $2 WHERE idPrediccion = $3';
            const params2 = [idFundamentoProyectivo, prediccion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Prediccion Updated',
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

async function deletePrediccion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PREDICCION WHERE idPrediccion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Prediccion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PREDICCION SET active = $1 WHERE idPrediccion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Prediccion Updated',
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
    createPrediccion,
    updatePrediccion,
    deletePrediccion,
    getPrediccionById
}