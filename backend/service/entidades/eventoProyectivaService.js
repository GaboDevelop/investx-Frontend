const client = require('../../bd/connection.js');


async function getEventoProyectivaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM EVENTO_PROYECTIVA WHERE idEventoProyectiva = $1';
        const params = [id];
        const EventoProyectiva = await client.query(sql, params);
        res.json({
            data: EventoProyectiva
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createEventoProyectiva(req, res) {

    try {
        const { idEvento, idProyectiva } = req.body;

        const sql = 'INSERT INTO EVENTO_PROYECTIVA (idEvento, idProyectiva) VALUES ($1, $2)';
        const params = [idEvento, idProyectiva];
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

async function updateEventoProyectiva(req, res) {

    try {
        const { id } = req.params;
        const { idEvento, idProyectiva } = req.body;

        const sql = 'SELECT * FROM EVENTO_PROYECTIVA WHERE idEventoProyectiva = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Evento Proyectiva no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE EVENTO_PROYECTIVA SET idEvento = $1, idProyectiva = $2 WHERE idEventoProyectiva = $3';
            const params2 = [idEvento, idProyectiva, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Evento Proyectiva Updated',
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

async function deleteEventoProyectiva(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM EVENTO_PROYECTIVA WHERE idEvento, idProyectiva = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Evento Proyectiva no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE EVENTO_PROYECTIVA SET active = $1 WHERE idEventoProyectiva = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Evento Proyectiva Updated',
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
    createEventoProyectiva,
    updateEventoProyectiva,
    deleteEventoProyectiva,
    getEventoProyectivaById
}