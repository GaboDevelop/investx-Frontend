const client = require('../../bd/connection.js');


async function getDisciplinaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DISCIPLINA WHERE idDisciplina = $1';
        const params = [id];
        const Disciplina = await client.query(sql, params);
        res.json({
            data: Disciplina
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createDisciplina(req, res) {

    try {
        const { disciplina } = req.body;

        const sql = 'INSERT INTO DISCIPLINA (disciplina) VALUES ($1)';
        const params = [disciplina];
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

async function updateDisciplina(req, res) {

    try {
        const { id } = req.params;
        const { disciplina } = req.body;

        const sql = 'SELECT * FROM DISCIPLINA WHERE idDisciplina = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Disciplina no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DISCIPLINA SET disciplina = $1 WHERE idDisciplina = $2';
            const params2 = [disciplina, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Disciplina Updated',
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

async function deleteDisciplina(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DISCIPLINA WHERE idDisciplina = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Disciplina no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DISCIPLINA SET active = $1 WHERE idDisciplina = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Disciplina Updated',
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
    createDisciplina,
    updateDisciplina,
    deleteDisciplina,
    getDisciplinaById
}