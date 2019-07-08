const client = require('../../bd/connection.js');


async function getCategoriaUnidadInformativaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CATEGORIA_UNIDAD_INFORMATIVA WHERE idCategoriaUnidad = $1';
        const params = [id];
        const CategoriaUnidadInformativa = await client.query(sql, params);
        res.json({
            data: CategoriaUnidadInformativa
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createCategoriaUnidadInformativa(req, res) {

    try {
        const { idUnidadInformativa, idCategoria } = req.body;

        const sql = 'INSERT INTO CATEGORIA_UNIDAD_INFORMATIVA (idUnidadInformativa, idCategoria) VALUES ($1, $2, $3)';
        const params = [idUnidadInformativa, idCategoria];
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

async function updateCategoriaUnidadInformativa(req, res) {

    try {
        const { id } = req.params;
        const { idUnidadInformativa, idCategoria } = req.body;

        const sql = 'SELECT * FROM CATEGORIA_UNIDAD_INFORMATIVA WHERE idCategoriaUnidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Categoria Unidad Informativa no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CATEGORIA_UNIDAD_INFORMATIVA SET idUnidadInformativa = $1, idCategoria = $2 WHERE idCategoriaUnidad = $3';
            const params2 = [idUnidadInformativa, idCategoria, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Categoria Unidad Informativa Updated',
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

async function deleteCategoriaUnidadInformativa(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CATEGORIA_UNIDAD_INFORMATIVA WHERE idCategoriaUnidad = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Categoria Unidad Informativa no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CATEGORIA_UNIDAD_INFORMATIVA SET active = $1 WHERE idCategoriaUnidad = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Categoria Unidad Informativa Updated',
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
    createCategoriaUnidadInformativa,
    updateCategoriaUnidadInformativa,
    deleteCategoriaUnidadInformativa,
    getCategoriaUnidadInformativaById
}