const client = require('../../bd/connection.js');


async function getTipoInvestigacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TIPO_INVESTIGACION WHERE idTipoInvestigacion = $1';
        const params = [id];
        const TipoInvestigacion = await client.query(sql, params);
        res.json({
            data: TipoInvestigacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createTipoInvestigacion(req, res) {

    try {
        const { tipo } = req.body;

        const sql = 'INSERT INTO TIPO_INVESTIGACION (tipo) VALUES ($1)';
        const params = [tipo];
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

async function updateTipoInvestigacion(req, res) {

    try {
        const { id } = req.params;
        const { tipo } = req.body;

        const sql = 'SELECT * FROM TIPO_INVESTIGACION WHERE idTipoInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tipo Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TIPO_INVESTIGACION SET tipo = $1 WHERE idTipoInvestigacion = $2';
            const params2 = [tipo, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tipo Investigacion Updated',
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

async function deleteTipoInvestigacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TIPO_INVESTIGACION WHERE idTipoInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tipo Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TIPO_INVESTIGACION SET active = $1 WHERE idTipoInvestigacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tipo Investigacion Updated',
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
    createTipoInvestigacion,
    updateTipoInvestigacion,
    deleteTipoInvestigacion,
    getTipoInvestigacionById
}