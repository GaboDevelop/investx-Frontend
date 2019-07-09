const client = require('../../bd/connection.js');


async function getProyectoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PROYECTO WHERE idProyecto = $1';
        const params = [id];
        const Proyecto = await client.query(sql, params);
        res.json({
            data: Proyecto
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createProyecto(req, res) {

    try {
        const { idTemaInvestigacion, idTemporalidad, idContexto, idUnidadEstudio, idProyectiva, modalidad  } = req.body;

        const sql = 'INSERT INTO PROYECTO (idTemaInvestigacion, idTemporalidad, idContexto, idUnidadEstudio, idProyectiva, modalidad ) VALUES ($1, $2, $3, $4, $5, $6 )';
        const params = [idTemaInvestigacion, idTemporalidad, idContexto, idUnidadEstudio, idProyectiva, modalidad ];
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

async function updateProyecto(req, res) {

    try {
        const { id } = req.params;
        const { idTemaInvestigacion, idTemporalidad, idContexto, idUnidadEstudio, idProyectiva, modalidad  } = req.body;

        const sql = 'SELECT * FROM PROYECTO WHERE idProyecto = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Proyecto no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PROYECTO SET idTemaInvestigacion = $1, idTemporalidad = $2, idContexto = $3, idUnidadEstudio = $4, idProyectiva = $5, modalidad = $6 WHERE idProyecto = $7';
            const params2 = [idTemaInvestigacion, idTemporalidad, idContexto, idUnidadEstudio, idProyectiva, modalidad , id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Proyecto Updated',
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

async function deleteProyecto(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PROYECTO WHERE idProyecto = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Proyecto no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PROYECTO SET active = $1 WHERE idProyecto = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Proyecto Updated',
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
    createProyecto,
    updateProyecto,
    deleteProyecto,
    getProyectoById
}