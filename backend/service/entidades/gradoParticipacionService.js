const client = require('../../bd/connection.js');


async function getGradoParticipacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM GRADO_PARTICIPACION WHERE idGradoParticipacion = $1';
        const params = [id];
        const GradoParticipacion = await client.query(sql, params);
        res.json({
            data: GradoParticipacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createGradoParticipacion(req, res) {

    try {
        const { gradoParticipacion } = req.body;

        const sql = 'INSERT INTO GRADO_PARTICIPACION (gradoParticipacion) VALUES ($1)';
        const params = [gradoParticipacion];
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

async function updateGradoParticipacion(req, res) {

    try {
        const { id } = req.params;
        const { gradoParticipacion } = req.body;

        const sql = 'SELECT * FROM GRADO_PARTICIPACION WHERE idGradoParticipacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Grado  Participacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE GRADO_PARTICIPACION SET gradoParticipacion= $1 WHERE idGradoParticipacion = $2';
            const params2 = [gradoParticipacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Grado  Participacion Updated',
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

async function deleteGradoParticipacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM GRADO_PARTICIPACION WHERE idGradoParticipacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Grado  Participacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE GRADO_PARTICIPACION SET active = $1 WHERE idGradoParticipacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Grado  Participacion Updated',
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
    createGradoParticipacion,
    updateGradoParticipacion,
    deleteGradoParticipacion,
    getGradoParticipacionById
}