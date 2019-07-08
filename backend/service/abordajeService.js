const client = require('../bd/connection.js');

async function getAbordaje(req, res) {

    try {
        const sql = 'SELECT * FROM ABORDAJE';
        
        const abordaje = await client.query(sql);
        res.json({
            data: abordaje
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function getAbordajeById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ABORDAJE WHERE idAbordaje = $1';
        const params = [id];
        const abordaje = await client.query(sql, params);
        res.json({
            data: abordaje
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createAbordaje(req, res) {

    try {
        const { idProyectiva, idEstructuracionPrevia, idPerspectivaInterpretacion, idGradoParticipacion } = req.body;

        const sql = 'INSERT INTO ABORDAJE (idProyectiva, idEstructuracionPrevia, idPerspectivaInterpretacion, idGradoParticipacion) VALUES ($1, $2, $3, $4 )';
        const params = [idProyectiva, idEstructuracionPrevia, idPerspectivaInterpretacion, idGradoParticipacion];
        const abordaje = await client.query(sql, params);
        res.json({
            data: abordaje
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function updateAbordaje(req, res) {

    try {
        const { id } = req.params;
        const { idProyectiva, idEstructuracionPrevia, idPerspectivaInterpretacion, idGradoParticipacion } = req.body;

        const sql = 'SELECT * FROM ABORDAJE WHERE idAbordaje = $1';
        const params = [id];
        const abordajes = await client.query(sql, params);
        
        
        if (abordajes.length = 0) { 
            return res.json({
            message: 'Proyectiva no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ABORDAJE SET idProyectiva = $1, idEstructuracionPrevia = $2, idPerspectivaInterpretacion = $3, idGradoParticipacion = $4 WHERE idAbordaje = $5';
            const params2 = [idProyectiva, idEstructuracionPrevia, idPerspectivaInterpretacion, idGradoParticipacion , id];
            const abordaje = await client.query(sql2, params2);
            return res.json({
                message: 'abordaje Updated',
                data: abordaje
            })
        

    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function deleteAbordaje(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ABORDAJE WHERE idAbordaje = $1';
        const params = [id];
        const abordajes = await client.query(sql, params);
        
        
        if (abordajes.length = 0) { 
            return res.json({
            message: 'Abordaje no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ABORDAJE SET active = $1  WHERE idAbordaje = $2';
            const params2 = [false, id];
            const abordaje = await client.query(sql2, params2);
            return res.json({
                message: 'abordaje Updated',
                data: abordaje
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
    getAbordaje:getAbordaje,
    getAbordajeById: getAbordajeById,
    createAbordaje:createAbordaje,
    updateAbordaje:updateAbordaje,
    deleteAbordaje:deleteAbordaje
}