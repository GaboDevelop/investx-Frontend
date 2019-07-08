const client = require('../../bd/connection.js');

async function getUnidadEstudio(req, res) {

    try {
        const sql = 'SELECT * FROM UNIDAD_ESTUDIO';
        
        const unidad = await client.query(sql);
        res.json({
            data: unidad
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function getUnidadById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM UNIDAD_ESTUDIO WHERE idUnidadEstudio = $1';
        const params = [id];
        const unidad = await client.query(sql, params);
        res.json({
            data: unidad
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createUnidadEstudio(req, res) {

    try {
        const { idPoblacion, idMuestra, descripcion } = req.body;

        const sql = 'INSERT INTO UNIDAD_ESTUDIO (idPoblacion, idMuestra, descripcion) VALUES ($1, $2, $3)';
        const params = [idPoblacion, idMuestra, descripcion];
        const unidad = await client.query(sql, params);
        res.json({
            data: unidad
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function updateUnidaEstudio(req, res) {

    try {
        const { id } = req.params;
        const { idPoblacion, idMuestra, descripcion } = req.body; 
        const sql = 'SELECT * FROM UNIDAD_ESTUDIO WHERE idUnidadEstudio = $1';
        const params = [id];
        const unidades = await client.query(sql, params);
        
        
        if (unidades.length = 0) { 
            return res.json({
            message: 'User no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE UNIDAD_ESTUDIO SET idPoblacion = $1, idMuestra = $2, descripcion = $3 WHERE idUnidadEstudio = $4';
            const params2 = [idPoblacion, idMuestra, descripcion, id];
            const Unidad = await client.query(sql2, params2);
            return res.json({
                message: 'Unidad Estudio Updated',
                data: Unidad
            })
        

    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function deleteUnidadEstudio(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM UNIDAD_ESTUDIO WHERE idUnidadEstudio = $1';
        const params = [id];
        const unidades = await client.query(sql, params);
        
        
        if (unidades.length = 0) { 
            return res.json({
            message: 'Unidad no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE UNIDAD_ESTUDIO SET active = $1 WHERE idUnidadEstudio = $2';
            const params2 = [false, id];
            const Unidad = await client.query(sql2, params2);
            return res.json({
                message: 'Unidad Updated',
                data: Unidad
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
    getUnidadEstudio: getUnidadEstudio,
    getUnidadById: getUnidadById, 
    createUnidadEstudio: createUnidadEstudio,
    updateUnidaEstudio: updateUnidaEstudio, 
    deleteUnidadEstudio: deleteUnidadEstudio
}