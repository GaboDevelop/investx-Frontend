const client = require('../../bd/connection.js');


async function getContextoUnidadEstudioById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONTEXTO_UNIDAD_ESTUDIO WHERE idContextoUnidadEstudio = $1';
        const params = [id];
        const ContextoUnidadEstudio = await client.query(sql, params);
        res.json({
            data: ContextoUnidadEstudio
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createContextoUnidadEstudio(req, res) {

    try {
        const { idContexto, idUnidadEstudio, argumento } = req.body;

        const sql = 'INSERT INTO CONTEXTO_UNIDAD_ESTUDIO (idContexto, idUnidadEstudio, argumento) VALUES ($1, $2, $3)';
        const params = [idContexto, idUnidadEstudio, argumento];
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

async function updateContextoUnidadEstudio(req, res) {

    try {
        const { id } = req.params;
        const { idContexto, idUnidadEstudio, argumento } = req.body;

        const sql = 'SELECT * FROM CONTEXTO_UNIDAD_ESTUDIO WHERE idContextoUnidadEstudio = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Contexto Unidad Estudio no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONTEXTO_UNIDAD_ESTUDIO SET idContexto = $1, idUnidadEstudio = $2, argumento = $3 WHERE idContextoUnidadEstudio = $4';
            const params2 = [idContexto, idUnidadEstudio, argumento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Contexto Unidad Estudio Updated',
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

async function deleteContextoUnidadEstudio(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONTEXTO_UNIDAD_ESTUDIO WHERE idContextoUnidadEstudio = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Contexto Unidad Estudio no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONTEXTO_UNIDAD_ESTUDIO SET active = $1 WHERE idContextoUnidadEstudio = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Contexto Unidad Estudio Updated',
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
    createContextoUnidadEstudio,
    updateContextoUnidadEstudio,
    deleteContextoUnidadEstudio,
    getContextoUnidadEstudioById
}