const client = require('../../bd/connection.js');


async function getDisciplinaEventoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DISCIPLINA_EVENTO WHERE idDisciplinaEvento = $1';
        const params = [id];
        const DisciplinaEvento = await client.query(sql, params);
        res.json({
            data: DisciplinaEvento
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createDisciplinaEvento(req, res) {

    try {
        const { idDisciplina, idEvento } = req.body;

        const sql = 'INSERT INTO DISCIPLINA_EVENTO (idDisciplina, idEvento) VALUES ($1, $2)';
        const params = [idDisciplina, idEvento];
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

async function updateDisciplinaEvento(req, res) {

    try {
        const { id } = req.params;
        const { idDisciplina, idEvento } = req.body;

        const sql = 'SELECT * FROM DISCIPLINA_EVENTO WHERE idDisciplinaEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Disciplina Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DISCIPLINA_EVENTO SET idDisciplina = $1, idEvento = $2 WHERE idDisciplinaEvento = $3';
            const params2 = [idDisciplina, idEvento, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Disciplina Evento Updated',
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

async function deleteDisciplinaEvento(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM DISCIPLINA_EVENTO WHERE idDisciplinaEvento = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Disciplina Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE DISCIPLINA_EVENTO SET active = $1 WHERE idDisciplinaEvento = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Disciplina Evento Updated',
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
    createDisciplinaEvento,
    updateDisciplinaEvento,
    deleteDisciplinaEvento,
    getDisciplinaEventoById
}