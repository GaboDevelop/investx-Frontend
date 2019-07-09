const client = require('../../bd/connection.js');


async function getContradiccionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONTRADICCION WHERE idContradiccion = $1';
        const params = [id];
        const Contradiccion = await client.query(sql, params);
        res.json({
            data: Contradiccion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createContradiccion(req, res) {

    try {
        const { idJustificacion, argumento } = req.body;

        const sql = 'INSERT INTO CONTRADICCION (idJustificacion, argumento) VALUES ($1, $2)';
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

async function updateContradiccion(req, res) {

    try {
        const { id } = req.params;
        const { idJustificacion, argumento } = req.body;

        const sql = 'SELECT * FROM CONTRADICCION WHERE idContradiccion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Contradiccion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONTRADICCION SET idJustificacion = $1, argumento = $2 WHERE idContradiccion = $3';
            const params2 = [idJustificacion, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Contradiccion Updated',
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

async function deleteContradiccion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONTRADICCION WHERE idContradiccion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Contradiccion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONTRADICCION SET active = $1 WHERE idContradiccion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Contradiccion Updated',
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
    createContradiccion,
    updateContradiccion,
    deleteContradiccion,
    getContradiccionById
}