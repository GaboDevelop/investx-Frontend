const client = require('../../bd/connection.js');


async function getTecnicaAnalisisById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TECNICA_ANALISIS WHERE idTecnicaAnalisis = $1';
        const params = [id];
        const TecnicaAnalisis = await client.query(sql, params);
        res.json({
            data: TecnicaAnalisis
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createTecnicaAnalisis(req, res) {

    try {
        const { tecnica } = req.body;

        const sql = 'INSERT INTO TECNICA_ANALISIS (tecnica) VALUES ($1)';
        const params = [tecnica];
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

async function updateTecnicaAnalisis(req, res) {

    try {
        const { id } = req.params;
        const { tecnica } = req.body;

        const sql = 'SELECT * FROM TECNICA_ANALISIS WHERE idTecnicaAnalisis = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tecnica Analisis no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TECNICA_ANALISIS SET tecnica= $1 WHERE idTecnicaAnalisis = $2';
            const params2 = [tecnica, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tecnica Analisis Updated',
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

async function deleteTecnicaAnalisis(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM TECNICA_ANALISIS WHERE idTecnicaAnalisis = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Tecnica Analisis no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE TECNICA_ANALISIS SET active = $1 WHERE idTecnicaAnalisis = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Tecnica Analisis Updated',
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
    createTecnicaAnalisis,
    updateTecnicaAnalisis,
    deleteTecnicaAnalisis,
    getTecnicaAnalisisById
}