const client = require('../../bd/connection.js');


async function getSinergiaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM SINERGIA WHERE idSinergia = $1';
        const params = [id];
        const Sinergia = await client.query(sql, params);
        res.json({
            data: Sinergia
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createSinergia(req, res) {

    try {
        const { idEvento, sinergia } = req.body;

        const sql = 'INSERT INTO SINERGIA (idEvento, sinergia) VALUES ($1, $2 )';
        const params = [idEvento, sinergia];
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

async function updateSinergia(req, res) {

    try {
        const { id } = req.params;
        const { idEvento, sinergia } = req.body;

        const sql = 'SELECT * FROM SINERGIA WHERE idSinergia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Sinergia no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE SINERGIA SET idEvento = $1, sinergia = $2 WHERE idSinergia = $3';
            const params2 = [idEvento, sinergia, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Sinergia Updated',
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

async function deleteSinergia(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM SINERGIA WHERE idSinergia = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Sinergia no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE SINERGIA SET active = $1 WHERE idSinergia = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Sinergia Updated',
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
    createSinergia,
    updateSinergia,
    deleteSinergia,
    getSinergiaById
}