const client = require('../../bd/connection.js');


async function getCondicionPersonalById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONDICION_PERSONAL WHERE idCondicionPersonal = $1';
        const params = [id];
        const CondicionPersonal = await client.query(sql, params);
        res.json({
            data: CondicionPersonal
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createCondicionPersonal(req, res) {

    try {
        const { idTemaInvestigacion, recursos, expectativa, conocimiento, asesoriaInformacion, accesoInformacion } = req.body;

        const sql = 'INSERT INTO CONDICION_PERSONAL (idTemaInvestigacion, recursos, expectativa, conocimiento, asesoriaInformacion, accesoInformacion) VALUES ($1, $2, $3, $4, $5, $6)';
        const params = [idTemaInvestigacion, recursos, expectativa, conocimiento, asesoriaInformacion, accesoInformacion];
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

async function updateCondicionPersonal(req, res) {

    try {
        const { id } = req.params;
        const { idTemaInvestigacion, recursos, expectativa, conocimiento, asesoriaInformacion, accesoInformacion } = req.body;

        const sql = 'SELECT * FROM CONDICION_PERSONAL WHERE idCondicionPersonal = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Condicion Personal no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONDICION_PERSONAL SET idTemaInvestigacion = $1, recusos = $2, expectativa = $3, conocimiento = $4, asesoriaInformacion = $5, accesoInformacion = $6 WHERE idCondicionPersonal = $7';
            const params2 = [idTemaInvestigacion, recursos, expectativa, conocimiento, asesoriaInformacion, accesoInformacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Condicion Personal Updated',
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

async function deleteCondicionPersonal(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONDICION_PERSONAL WHERE idCondicionPersonal = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Condicion Personal no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONDICION_PERSONAL SET active = $1 WHERE idCondicionPersonal = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Condicion Personal Updated',
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
    createCondicionPersonal,
    updateCondicionPersonal,
    deleteCondicionPersonal,
    getCondicionPersonalById
}