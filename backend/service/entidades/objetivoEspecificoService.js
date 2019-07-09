const client = require('../../bd/connection.js');


async function getObjetivoEspecificoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM OBJETIVO_ESPECIFICO WHERE idObjetivoEspecifico = $1';
        const params = [id];
        const ObjetivoEspecifico = await client.query(sql, params);
        res.json({
            data: ObjetivoEspecifico
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createObjetivoEspecifico(req, res) {

    try {
        const { idProyectiva, idEstadio, objetivo } = req.body;

        const sql = 'INSERT INTO OBJETIVO_ESPECIFICO (idProyectiva, idEstadio, objetivo) VALUES ($1, $2, $3)';
        const params = [idProyectiva, idEstadio, objetivo];
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

async function updateObjetivoEspecifico(req, res) {

    try {
        const { id } = req.params;
        const { idProyectiva, idEstadio, objetivo } = req.body;

        const sql = 'SELECT * FROM OBJETIVO_ESPECIFICO WHERE idObjetivoEspecifico = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Objetivo Especifico no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE OBJETIVO_ESPECIFICO SET idProyectiva = $1, idEstadio = $2, objetivo = $3 WHERE idObjetivoEspecifico = $4';
            const params2 = [idProyectiva, idEstadio, objetivo, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Objetivo Especifico Updated',
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

async function deleteObjetivoEspecifico(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM OBJETIVO_ESPECIFICO WHERE idObjetivoEspecifico = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Objetivo Especifico no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE OBJETIVO_ESPECIFICO SET active = $1 WHERE idObjetivoEspecifico = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Objetivo Especifico Updated',
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
    createObjetivoEspecifico,
    updateObjetivoEspecifico,
    deleteObjetivoEspecifico,
    getObjetivoEspecificoById
}