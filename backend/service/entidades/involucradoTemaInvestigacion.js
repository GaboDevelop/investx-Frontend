const client = require('../../bd/connection.js');


async function getInvolucradoTemaIById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM INVOLUCRADO_TEMA_INVESTIGACION WHERE idInvolucradoTema = $1';
        const params = [id];
        const InvolucradoTema = await client.query(sql, params);
        res.json({
            data: InvolucradoTema
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createInvolucradoTemaI(req, res) {

    try {
        const { idInvolucrado, idTemaInvestigacion } = req.body;

        const sql = 'INSERT INTO INVOLUCRADO_TEMA_INVESTIGACION (idInvolucrado, idTemaInvestigacion) VALUES ($1, $2)';
        const params = [idInvolucrado, idTemaInvestigacion];
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

async function updateInvolucradoTemaI(req, res) {

    try {
        const { id } = req.params;
        const { idInvolucrado, idTemaInvestigacion } = req.body;

        const sql = 'SELECT * FROM INVOLUCRADO_TEMA_INVESTIGACION WHERE idInvolucradoTema = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Involucrado Tema Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE INVOLUCRADO_TEMA_INVESTIGACION SET idInvolucrado= $1, idTemaInvestigacion = $2 WHERE idInvolucradoTema = $3';
            const params2 = [idInvolucrado, idTemaInvestigacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Involucrado Tema Investigacion Updated',
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

async function deleteInvolucradoTemaI(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM INVOLUCRADO_TEMA_INVESTIGACION WHERE idInvolucradoTema = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Involucrado Tema Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE INVOLUCRADO_TEMA_INVESTIGACION SET active = $1 WHERE idInvolucradoTema = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Involucrado Tema Investigacion Updated',
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
    createInvolucradoTemaI,
    updateInvolucradoTemaI,
    deleteInvolucradoTemaI,
    getInvolucradoTemaIById
}