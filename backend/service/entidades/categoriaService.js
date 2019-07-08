const client = require('../../bd/connection.js');




async function getCategoriaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM Categoria WHERE idCategoria = $1';
        const params = [id];
        const Categoria = await client.query(sql, params);
        res.json({
            data: Categoria
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createCategoria(req, res) {

    try {
        const { relacionTemaUnidad } = req.body;

        const sql = 'INSERT INTO CATEGORIA (relacionTemaUnidad) VALUES ($1)';
        const params = [relacionTemaUnidad];
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

async function updateCategoria(req, res) {

    try {
        const { id } = req.params;
        const { relacionTemaUnidad } = req.body;

        const sql = 'SELECT * FROM CATEGORIA WHERE idCategoria = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Categoria no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CATEGORIA SET relacioTemaUnidad = $1 WHERE idCategoria = $2';
            const params2 = [relacionTemaUnidad, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Categoria Updated',
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

async function deleteCategoria(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CATEGORIA WHERE idCategoria = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Categoria no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CATEGORIA SET active = $1 WHERE idCategoria = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Categoria Updated',
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
    createCategoria,
    getCategoriaById,
    updateCategoria,
    deleteCategoria
}