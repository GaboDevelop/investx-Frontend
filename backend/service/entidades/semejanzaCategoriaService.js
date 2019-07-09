const client = require('../../bd/connection.js');


async function getSemejanzaCategoriaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM SEMEJANZA_CATEGORIA WHERE idSemejanzaCategoria = $1';
        const params = [id];
        const SemejanzaCategoria = await client.query(sql, params);
        res.json({
            data: SemejanzaCategoria
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createSemejanzaCategoria(req, res) {

    try {
        const { idSemejanza, idCategoria } = req.body;

        const sql = 'INSERT INTO SEMEJANZA_CATEGORIA (idSemejanza, idCategoria) VALUES ($1, $2)';
        const params = [idSemejanza, idCategoria];
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

async function updateSemejanzaCategoria(req, res) {

    try {
        const { id } = req.params;
        const { idSemejanza, idCategoria } = req.body;

        const sql = 'SELECT * FROM SEMEJANZA_CATEGORIA WHERE idSemejanzaCategoria = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Analisis Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE SEMEJANZA_CATEGORIA SET idSemejanza = $1, idCategoria = $2 WHERE idSemejanzaCategoria = $3';
            const params2 = [idSemejanza, idCategoria, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Analisis Evento Updated',
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

async function deleteSemejanzaCategoria(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM SEMEJANZA_CATEGORIA WHERE idSemejanzaCategoria = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Analisis Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE SEMEJANZA_CATEGORIA SET active = $1 WHERE idSemejanzaCategoria = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Semejanza Categoria Updated',
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
    createSemejanzaCategoria,
    updateSemejanzaCategoria,
    deleteSemejanzaCategoria,
    getSemejanzaCategoriaById
}