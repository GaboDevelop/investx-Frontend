const client = require('../../bd/connection.js');


async function getVersionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM VERSION WHERE idVersion = $1';
        const params = [id];
        const Version = await client.query(sql, params);
        res.json({
            data: Version
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createVersion(req, res) {

    try {
        const { idTemaInvestigacion, fecha } = req.body;

        const sql = 'INSERT INTO VERSION (idTemaInvestigacion, fecha) VALUES ($1, $2)';
        const params = [idTemaInvestigacion, fecha];
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

async function updateVersion(req, res) {

    try {
        const { id } = req.params;
        const { idTemaInvestigacion, fecha } = req.body;

        const sql = 'SELECT * FROM VERSION WHERE idVersion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Version no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE VERSION SET idTemaInvestigacion = $1, gecha = $2 WHERE idVersion = $3';
            const params2 = [idTemaInvestigacion, fecha, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Version Updated',
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

async function deleteVersion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM VERSION WHERE idVersion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Version no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE VERSION SET active = $1 WHERE idVersion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Version Updated',
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
    createVersion,
    updateVersion,
    deleteVersion,
    getVersionById
}