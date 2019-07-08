const client = require('../../bd/connection.js');


async function getAnalisisEventoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM Analisis_Evento WHERE idAnalisisEvento = $1';
        const params = [id];
        const AnalisisEvento = await client.query(sql, params);
        res.json({
            data: AnalisisEvento
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createAnalisisEvento(req, res) {

    try {
        const { idFundamentoProyectivo, idTecnicaAnalisis, analisis } = req.body;

        const sql = 'INSERT INTO ANALISIS_EVENTO (idFundamentoProyectivo, idTecnicaAnalisis, analisis) VALUES ($1, $2, $3)';
        const params = [idFundamentoProyectivo, idTecnicaAnalisis, analisis];
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

async function updateAnalisisEvento(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, idTecnicaAnalisis, analisis } = req.body;

        const sql = 'SELECT * FROM ANALISIS_EVENTO WHERE idAnalisisEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Analisis Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ANALISIS_EVENTO SET idFundamentoProyectivo= $1, idTecnicaAnalisis = $2, analisis = $3 WHERE idAnalisisEvento = $4';
            const params2 = [idFundamentoProyectivo, idTecnicaAnalisis, analisis, id];
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

async function deleteAnalisisEvento(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ANALISIS_EVENTO WHERE idAnalisisEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Analisis Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ANALISIS_EVENTO SET active = $1 WHERE idAnalisisEvento = $2';
            const params2 = [false, id];
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

module.exports = {
    createAnalisisEvento,
    updateAnalisisEvento,
    deleteAnalisisEvento,
    getAnalisisEventoById
}