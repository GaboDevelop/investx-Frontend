const client = require('../../bd/connection.js');


async function getDisenoInvestigacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DISENO_INVESTIGACION WHERE idDisenoInvestigacion = $1';
        const params = [id];
        const DisenoInvestigacion = await client.query(sql, params);
        res.json({
            data: DisenoInvestigacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createDisenoInvestigacion(req, res) {

    try {
        const { tipo } = req.body;

        const sql = 'INSERT INTO DISENO_INVESTIGACION (tipo) VALUES ($1)';
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

async function updateDisenoInvestigacion(req, res) {

    try {
        const { id } = req.params;
        const { tipo } = req.body;

        const sql = 'SELECT * FROM DISENO_INVESTIGACION WHERE idDisenoInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Diseno Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DISENO_INVESTIGACION SET tipo = $1 WHERE idDisenoInvestigacion = $2';
            const params2 = [tipo, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Diseno Investigacion Updated',
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

async function deleteDisenoInvestigacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DISENO_INVESTIGACION WHERE idDisenoInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Diseno Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DISENO_INVESTIGACION SET active = $1 WHERE idDisenoInvestigacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Diseno Investigacion Updated',
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
    createDisenoInvestigacion,
    updateDisenoInvestigacion,
    deleteDisenoInvestigacion,
    getDisenoInvestigacionById
}