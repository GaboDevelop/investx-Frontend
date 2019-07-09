const client = require('../../bd/connection.js');


async function getIndicioById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM INDICIO WHERE idIndicio = $1';
        const params = [id];
        const Indicio = await client.query(sql, params);
        res.json({
            data: Indicio
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createIndicio(req, res) {

    try {
        const { idSinergia, indicio } = req.body;

        const sql = 'INSERT INTO INDICIO (idSinergia, indicio) VALUES ($1, $2)';
        const params = [idSinergia, indicio];
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

async function updateIndicio(req, res) {

    try {
        const { id } = req.params;
        const { idSinergia, indicio } = req.body;

        const sql = 'SELECT * FROM INDICIO WHERE idIndicio = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Indicio no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE INDICIO SET idSinergia = $1, indicio = $2 WHERE idIndicio = $3';
            const params2 = [idSinergia, indicio, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Indicio Updated',
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

async function deleteIndicio(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM INDICIO WHERE idIndicio = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Indicio no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE INDICIO SET active = $1 WHERE idIndicio = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Indicio Updated',
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
    createIndicio,
    updateIndicio,
    deleteIndicio,
    getIndicioById
}