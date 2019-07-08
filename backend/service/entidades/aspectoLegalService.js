const client = require('../../bd/connection.js');




async function getAspectoLegalById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM Aspecto_Legal WHERE idAspectoLegal = $1';
        const params = [id];
        const AspectoLegal = await client.query(sql, params);
        res.json({
            data: AspectoLegal
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createAspectoLegal(req, res) {

    try {
        const { aspecto } = req.body;

        const sql = 'INSERT INTO ASPECTO_LEGAL (aspecto) VALUES ($1)';
        const params = [aspecto];
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


async function updateAspectoLegal(req, res) {

    try {
        const { id } = req.params;
        const { aspecto } = req.body;

        const sql = 'SELECT * FROM ASPECTO_LEGAL WHERE idAspectoLegal = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Aspecto Legal no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ASPECTO_LEGAL SET aspecto = $1 WHERE idAspectoLegal = $2';
            const params2 = [aspecto, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Aspecto Legal Updated',
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

async function deleteAspectoLegal(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM ASPECTO_LEGAL WHERE idAspectoLegal = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Analisis Evento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE ASPECTO_LEGAL SET active = $1 WHERE idAspectoLegal = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Analisis Evento Updated',
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
    createAspectoLegal,
    updateAspectoLegal,
    deleteAspectoLegal,
    getAspectoLegalById
}