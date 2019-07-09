const client = require('../../bd/connection.js');


async function getObjetivoGeneralById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM OBJETIVO_GENERAL WHERE idObjetivoGeneral = $1';
        const params = [id];
        const ObjetivoGeneral = await client.query(sql, params);
        res.json({
            data: ObjetivoGeneral
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createObjetivoGeneral(req, res) {

    try {
        const { idProyectiva, objetivo } = req.body;

        const sql = 'INSERT INTO OBJETIVO_GENERAL (idProyectiva, objetivo) VALUES ($1, $2)';
        const params = [idProyectiva, objetivo];
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

async function updateObjetivoGeneral(req, res) {

    try {
        const { id } = req.params;
        const { idProyectiva, objetivo } = req.body;

        const sql = 'SELECT * FROM OBJETIVO_GENERAL WHERE idObjetivoGeneral = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Objetivo General no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE OBJETIVO_GENERAL SET idProyectiva = $1, objetivo = $2 WHERE idObjetivoGeneral = $3';
            const params2 = [idProyectiva, objetivo, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Objetivo General Updated',
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

async function deleteObjetivoGeneral(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM OBJETIVO_GENERAL WHERE idObjetivoGeneral = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Objetivo General no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE OBJETIVO_GENERAL SET active = $1 WHERE idObjetivoGeneral = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Objetivo General Updated',
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
    createObjetivoGeneral,
    updateObjetivoGeneral,
    deleteObjetivoGeneral,
    getObjetivoGeneralById
}