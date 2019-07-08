const client = require('../../bd/connection.js');

async function getContextos(req, res) {

    try {
        const sql = 'SELECT * FROM CONTEXTO';
        
        const contextos = await client.query(sql);
        res.json({
            data: contextos
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function getContextoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONTEXTO WHERE idContexto = $1';
        const params = [id];
        const contexto = await client.query(sql, params);
        res.json({
            data: contexto
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createContexto(req, res) {

    try {
        const { contexto } = req.body;

        const sql = 'INSERT INTO CONTEXTO (contexto) VALUES ($1)';
        const params = [contexto];
        const contextos = await client.query(sql, params);
        res.json({
            data: contextos
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function updateContexto(req, res) {

    try {
        const { id } = req.params;
        const {  contexto } = req.body;

        const sql = 'SELECT * FROM CONTEXTO WHERE idContexto = $1';
        const params = [id];
        const contextos = await client.query(sql, params);
        
        
        if (contextos.length = 0) { 
            return res.json({
            message: 'Contexto no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONTEXTO SET contexto = $1 WHERE idContexto = $2';
            const params2 = [contexto, id];
            const contextoo = await client.query(sql2, params2);
            return res.json({
                message: 'contexto Updated',
                data: contextoo
            })
        

    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function deleteContexto(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONTEXTO WHERE idContexto = $1';
        const params = [id];
        const contextos = await client.query(sql, params);
        
        
        if (contextos.length = 0) { 
            return res.json({
            message: 'Contexto no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONTEXTO SET active = $1  WHERE idContexto = $2';
            const params2 = [false, id];
            const contextoo = await client.query(sql2, params2);
            return res.json({
                message: 'contexto Updated',
                data: contextoo
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
    getContextos: getContextos,
    getContextoById: getContextoById,
    createContexto: createContexto,
    updateContexto: updateContexto,
    deleteContexto: deleteContexto
}