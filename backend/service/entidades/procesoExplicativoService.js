const client = require('../../bd/connection.js');


async function getProcesoExplicativoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PROCESO_EXPLICATIVO WHERE idProcesoExplicativo = $1';
        const params = [id];
        const ProcesoExplicativo = await client.query(sql, params);
        res.json({
            data: ProcesoExplicativo
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createProcesoExplicativo(req, res) {

    try {
        const { idFundamentoProyectivo, proceso } = req.body;

        const sql = 'INSERT INTO PROCESO_EXPLICATIVO (idFundamentoProyectivo, proceso) VALUES ($1, $2 )';
        const params = [idFundamentoProyectivo, proceso];
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

async function updateProcesoExplicativo(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, proceso } = req.body;

        const sql = 'SELECT * FROM PROCESO_EXPLICATIVO WHERE idProcesoExplicativo = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Proceso Explicativo no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PROCESO_EXPLICATIVO SET idFundamentoProyectivo= $1, proceso = $2 WHERE idProcesoExplicativo = $3';
            const params2 = [idFundamentoProyectivo, proceso, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Proceso Explicativo Updated',
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

async function deleteProcesoExplicativo(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PROCESO_EXPLICATIVO WHERE idProcesoExplicativo = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Proceso Explicativo no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PROCESO_EXPLICATIVO SET active = $1 WHERE idProcesoExplicativo = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Proceso Explicativo Updated',
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
    createProcesoExplicativo,
    updateProcesoExplicativo,
    deleteProcesoExplicativo,
    getProcesoExplicativoById
}