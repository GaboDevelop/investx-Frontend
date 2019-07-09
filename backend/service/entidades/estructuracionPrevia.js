const client = require('../../bd/connection.js');


async function getEstructuracionPreviaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ESTRUCTURACION_PREVIA WHERE idEstructuracionPrevia = $1';
        const params = [id];
        const EstructuracionPrevia = await client.query(sql, params);
        res.json({
            data: EstructuracionPrevia
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createEstructuracionPrevia(req, res) {

    try {
        const { estructuracionPrevia } = req.body;

        const sql = 'INSERT INTO ESTRUCTURACION_PREVIA (estructuracionPrevia) VALUES ($1)';
        const params = [estructuracionPrevia];
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

async function updateEstructuracionPrevia(req, res) {

    try {
        const { id } = req.params;
        const { estructuracionPrevia } = req.body;

        const sql = 'SELECT * FROM ESTRUCTURACION_PREVIA WHERE idEstructuracionPrevia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Estructuracion previa no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ESTRUCTURACION_PREVIA SET estructuracionPrevia = $1 WHERE idEstructuracionPrevia = $2';
            const params2 = [estructuracionPrevia, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Estructuracion previa Updated',
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

async function deleteEstructuracionPrevia(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ESTRUCTURACION_PREVIA WHERE idEstructuracionPrevia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Estructuracion previa no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ESTRUCTURACION_PREVIA SET active = $1 WHERE idEstructuracionPrevia = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Estructuracion previa Updated',
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
    createEstructuracionPrevia,
    updateEstructuracionPrevia,
    deleteEstructuracionPrevia,
    getEstructuracionPreviaById
}