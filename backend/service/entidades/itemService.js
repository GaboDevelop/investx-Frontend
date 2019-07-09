const client = require('../../bd/connection.js');


async function getItemById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ITEM WHERE idItem = $1';
        const params = [id];
        const Item = await client.query(sql, params);
        res.json({
            data: Item
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createItem(req, res) {

    try {
        const { idInstrumento, item } = req.body;

        const sql = 'INSERT INTO ITEM (idInstrumento, item) VALUES ($1, $2)';
        const params = [idInstrumento, item];
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

async function updateItem(req, res) {

    try {
        const { id } = req.params;
        const { idInstrumento, item } = req.body;

        const sql = 'SELECT * FROM ITEM WHERE idItem = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Item no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ITEM SET idInstrumento = $1, item = $2 WHERE idItem = $3';
            const params2 = [idInstrumento, item, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Item Updated',
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

async function deleteItem(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ITEM WHERE idItem = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Item no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ITEM SET active = $1 WHERE idItem = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Item Updated',
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
    createItem,
    updateItem,
    deleteItem,
    getItemById
}