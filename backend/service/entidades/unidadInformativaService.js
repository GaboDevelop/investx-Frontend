const client = require('../../bd/connection.js');


async function getUnidadInformativaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM UNIDAD_INFORMATIVA WHERE idUnidadInformativa = $1';
        const params = [id];
        const UnidadInformativa = await client.query(sql, params);
        res.json({
            data: UnidadInformativa
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createUnidadInformativa(req, res) {

    try {
        const { idProyectiva, idEvento, idea, cita, referencia } = req.body;

        const sql = 'INSERT INTO UNIDAD_INFORMATIVA (idProyectiva, idEvento, idea, cita, referencia) VALUES ($1, $2, $3, $4, $5)';
        const params = [idProyectiva, idEvento, idea, cita, referencia];
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

async function updateUnidadInformativa(req, res) {

    try {
        const { id } = req.params;
        const { idProyectiva, idEvento, idea, cita, referencia } = req.body;

        const sql = 'SELECT * FROM UNIDAD_INFORMATIVA WHERE idUnidadInformativa = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Unidad Informativa no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE UNIDAD_INFORMATIVA SET idProyectiva = $1, idEvento = $2, idea = $3, cita = $4, referencia = $5 WHERE idUnidadInformativa = $5';
            const params2 = [idProyectiva, idEvento, idea, cita, referencia, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Unidad Informativa Updated',
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

async function deleteUnidadInformativa(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM UNIDAD_INFORMATIVA WHERE idUnidadInformativa = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Unidad Informativa no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE UNIDAD_INFORMATIVA SET active = $1 WHERE idUnidadInformativa = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Unidad Informativa Updated',
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
    createUnidadInformativa,
    updateUnidadInformativa,
    deleteUnidadInformativa,
    getUnidadInformativaById
}