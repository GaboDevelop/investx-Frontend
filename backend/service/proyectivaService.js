const client = require('../bd/connection.js');

async function getProyectivas(req, res) {

    try {
        const sql = 'SELECT * FROM PROYECTIVA';
        
        const proyectivas = await client.query(sql);
        res.json({
            data: proyectivas
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function getProyectivaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PROYECTIVA WHERE idProyectiva = $1';
        const params = [id];
        const proyectiva = await client.query(sql, params);
        res.json({
            data: proyectiva
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createProyectiva(req, res) {

    try {
        const { idUnidadEstudio, idDisenoInvestigacion } = req.body;

        const sql = 'INSERT INTO PROYECTIVA (idUnidadEstudio, idDisenoInvestigacion) VALUES ($1, $2)';
        const params = [idUnidadEstudio, idDisenoInvestigacion];
        const proyectiva = await client.query(sql, params);
        res.json({
            data: proyectiva
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function updateProyectiva(req, res) {

    try {
        const { id } = req.params;
        const {  idUnidadEstudio, idDisenoInvestigacion } = req.body;

        const sql = 'SELECT * FROM PROYECTIVA WHERE idProyectiva = $1';
        const params = [id];
        const proyectivas = await client.query(sql, params);
        
        
        if (proyectivas.length = 0) { 
            return res.json({
            message: 'Proyectiva no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PROYECTIVA SET idUnidadEstudio = $1, idDisenoInvestigacion = $2  WHERE idProyectiva = $3';
            const params2 = [idUnidadEstudio, idDisenoInvestigacion, id];
            const proyectiva = await client.query(sql2, params2);
            return res.json({
                message: 'proyectiva Updated',
                data: proyectiva
            })
        

    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function deleteProyectiva(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PROYECTIVA WHERE idProyectiva = $1';
        const params = [id];
        const proyectivas = await client.query(sql, params);
        
        
        if (proyectivas.length = 0) { 
            return res.json({
            message: 'Proyectiva no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PROYECTIVA SET active = $1  WHERE idProyectiva = $2';
            const params2 = [false, id];
            const proyectiva = await client.query(sql2, params2);
            return res.json({
                message: 'proyectiva Updated',
                data: proyectiva
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
    getProyectivas: getProyectivas,
    getProyectivaById: getProyectivaById,
    createProyectiva: createProyectiva,
    updateProyectiva: updateProyectiva,
    deleteProyectiva: deleteProyectiva

}