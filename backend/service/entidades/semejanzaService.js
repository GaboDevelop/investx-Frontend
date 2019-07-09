const client = require('../../bd/connection.js');


async function getSemejanzaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM SEMEJANZA WHERE idSemejanza = $1';
        const params = [id];
        const Semejanza = await client.query(sql, params);
        res.json({
            data: Semejanza
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createSemejanza(req, res) {

    try {
        const { semejanza } = req.body;

        const sql = 'INSERT INTO SEMEJANZA (semejanza) VALUES ($1)';
        const params = [semejanza];
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

async function updateSemejanza(req, res) {

    try {
        const { id } = req.params;
        const { semejanza } = req.body;

        const sql = 'SELECT * FROM SEMEJANZA WHERE idSemejanza = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Semejanza no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE SEMEJANZA SET semejanza = $1 WHERE idSemejanza = $2';
            const params2 = [semejanza, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Semejanza Updated',
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

async function deleteSemejanza(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM SEMEJANZA WHERE idSemejanza = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Semejanza no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE SEMEJANZA SET active = $1 WHERE idSemejanza = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Semejanza Updated',
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
    createSemejanza,
    updateSemejanza,
    deleteSemejanza,
    getSemejanzaById
}