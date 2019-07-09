const client = require('../../bd/connection.js');


async function getDescripcionEventoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DESCRIPCION_EVENTO WHERE idDescripcionEvento = $1';
        const params = [id];
        const DescripcionEvento = await client.query(sql, params);
        res.json({
            data: DescripcionEvento
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createDescripcionEvento(req, res) {

    try {
        const { idFundamentoProyectivo, definicion, explicacion } = req.body;

        const sql = 'INSERT INTO DESCRIPCION_EVENTO (idFundamentoProyectivo, definicion, explicacion) VALUES ($1, $2, $3)';
        const params = [idFundamentoProyectivo, definicion, explicacion];
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

async function updateDescripcionEvento(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, definicion, explicacion } = req.body;

        const sql = 'SELECT * FROM DESCRIPCION_EVENTO WHERE idDescripcionEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Descripcion Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DESCRIPCION_EVENTO SET idFundamentoProyectivo= $1,definicion = $2, explicacion = $3 WHERE idDescripcionEvento = $4';
            const params2 = [idFundamentoProyectivo, definicion, explicacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Descripcion Evento Updated',
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

async function deleteDescripcionEvento(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DESCRIPCION_EVENTO WHERE idDescripcionEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Descripcion Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DESCRIPCION_EVENTO SET active = $1 WHERE idDescripcionEvento = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Descripcion Evento Updated',
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
    createDescripcionEvento,
    updateDescripcionEvento,
    deleteDescripcionEvento,
    getDescripcionEventoById
}