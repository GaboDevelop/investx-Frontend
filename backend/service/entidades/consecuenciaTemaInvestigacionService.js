const client = require('../../bd/connection.js');


async function getConsecuenciaTemaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONSECUENCIA_TEMA_INVESTIGACION WHERE idConsecuenciaTema = $1';
        const params = [id];
        const ConsecuenciaTema = await client.query(sql, params);
        res.json({
            data: ConsecuenciaTema
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createConsecuenciaTema(req, res) {

    try {
        const { idTemaInvestigacion, idConsecuencia } = req.body;

        const sql = 'INSERT INTO CONSECUENCIA_TEMA_INVESTIGACION (idTemaInvestigacion, idConsecuencia) VALUES ($1, $2)';
        const params = [idTemaInvestigacion, idConsecuencia];
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

async function updateConsecuenciaTema(req, res) {

    try {
        const { id } = req.params;
        const { idTemaInvestigacion, idConsecuencia } = req.body;

        const sql = 'SELECT * FROM CONSECUENCIA_TEMA_INVESTIGACION WHERE idConsecuenciaTema = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Consecuencia Tema Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONSECUENCIA_TEMA_INVESTIGACION SET idTemaInvestigacion = $1, idConsecuencia = $2 WHERE idConsecuenciaTema = $3';
            const params2 = [idTemaInvestigacion, idConsecuencia, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Consecuencia Tema Investigacion Updated',
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

async function deleteConsecuenciaTema(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONSECUENCIA_TEMA_INVESTIGACION WHERE idConsecuenciaTema = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Consecuencia Tema Investigacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONSECUENCIA_TEMA_INVESTIGACION SET active = $1 WHERE idConsecuenciaTema = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Consecuencia Tema Investigacion Updated',
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
    createConsecuenciaTema,
    updateConsecuenciaTema,
    deleteConsecuenciaTema,
    getConsecuenciaTemaById
}