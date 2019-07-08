const client = require('../../bd/connection.js');


async function getCondicionSocialById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONDICION_SOCIAL WHERE idCondicionSocial = $1';
        const params = [id];
        const CondicionSocial = await client.query(sql, params);
        res.json({
            data: CondicionSocial
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createCondicionSocial(req, res) {

    try {
        const { idTemaInvstigacion, contribucion, necesidad, aporte, aplicacion } = req.body;

        const sql = 'INSERT INTO CONDICION_SOCIAL (idTemaInvstigacion, contribucion, necesidad, aporte, aplicacion) VALUES ($1, $2, $3, $4, $5)';
        const params = [idTemaInvstigacion, contribucion, necesidad, aporte, aplicacion];
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

async function updateCondicionSocial(req, res) {

    try {
        const { id } = req.params;
        const { idTemaInvstigacion, contribucion, necesidad, aporte, aplicacion } = req.body;

        const sql = 'SELECT * FROM CONDICION_SOCIAL WHERE idCondicionSocial = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Condicion Social no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONDICION_SOCIAL SET idTemaInvestigacion = $1, contribucion = $2, necesidad = $3, aporte = $4, aplicacion = $5 WHERE idCondicionSocial = $6';
            const params2 = [idTemaInvstigacion, contribucion, necesidad, aporte, aplicacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Condicion Social Updated',
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

async function deleteCondicionSocial(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONDICION_SOCIAL WHERE idCondicionSocial = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Condicion Social no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONDICION_SOCIAL SET active = $1 WHERE idCondicionSocial = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Condicion Social Updated',
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
    createCondicionSocial,
    updateCondicionSocial,
    deleteCondicionSocial,
    getCondicionSocialById
}