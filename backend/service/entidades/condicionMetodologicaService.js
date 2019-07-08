const client = require('../../bd/connection.js');


async function getCondicionMetodologicaById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONDICION_METODOLOGICA WHERE idCondicionMetodologica = $1';
        const params = [id];
        const CondicionMetodologica = await client.query(sql, params);
        res.json({
            data: CondicionMetodologica
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createCondicionMetodologica(req, res) {

    try {
        const { idTemaInvestigacion, poblacionAccesible, abordajeAccesible, instrumentoMedicion, estudiosPrevios } = req.body;

        const sql = 'INSERT INTO CONDICION_METODOLOGICA (idTemaInvestigacion, poblacionAccesible, abordajeAccesible, instrumentoMedicion, estudiosPrevios) VALUES ($1, $2, $3, $4, $5)';
        const params = [idTemaInvestigacion, poblacionAccesible, abordajeAccesible, instrumentoMedicion, estudiosPrevios];
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

async function updateCondicionMetodologica(req, res) {

    try {
        const { id } = req.params;
        const { idTemaInvestigacion, poblacionAccesible, abordajeAccesible, instrumentoMedicion, estudiosPrevios } = req.body;

        const sql = 'SELECT * FROM CONDICION_METODOLOGICA WHERE idCondicionMetodologica = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Condicion Metologica no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONDICION_METODOLOGICA SET idTemaInvestigacion = $1, poblacionAccesible = $2, abordajeAccesible = $3, instrumentoMedicion = $4, estudiosPrevios = $5 WHERE idCondicionMetodologica = $6';
            const params2 = [idTemaInvestigacion, poblacionAccesible, abordajeAccesible, instrumentoMedicion, estudiosPrevios, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Condicion Metologica Updated',
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

async function deleteCondicionMetodologica(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM CONDICION_METODOLOGICA WHERE idCondicionMetodologica = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Condicion Metologica no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE CONDICION_METODOLOGICA SET active = $1 WHERE idCondicionMetodologica = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Condicion Metologica Updated',
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
    createCondicionMetodologica,
    updateCondicionMetodologica,
    deleteCondicionMetodologica,
    getCondicionMetodologicaById
}