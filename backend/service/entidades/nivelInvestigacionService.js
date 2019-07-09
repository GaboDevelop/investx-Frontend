const client = require('../../bd/connection.js');


async function getNivelInvestigacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM NIVEL_INVESTIGACION WHERE idNivelInvestigacion = $1';
        const params = [id];
        const NivelInvestigacion = await client.query(sql, params);
        res.json({
            data: NivelInvestigacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createNivelInvestigacion(req, res) {

    try {
        const { nivel } = req.body;

        const sql = 'INSERT INTO NIVEL_INVESTIGACION (nivel) VALUES ($1)';
        const params = [nivel];
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

async function updateNivelInvestigacion(req, res) {

    try {
        const { id } = req.params;
        const { nivel } = req.body;

        const sql = 'SELECT * FROM NIVEL_INVESTIGACION WHERE idNivelInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Nivel Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE NIVEL_INVESTIGACION SET nivel = $1 WHERE idNivelInvestigacion = $2';
            const params2 = [nivel, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Nivel Investigacion Updated',
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

async function deleteNivelInvestigacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM NIVEL_INVESTIGACION WHERE idNivelInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Nivel Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE NIVEL_INVESTIGACION SET active = $1 WHERE idNivelInvestigacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Nivel Investigacion Updated',
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
    createNivelInvestigacion,
    updateNivelInvestigacion,
    deleteNivelInvestigacion,
    getNivelInvestigacionById
}