const client = require('../../bd/connection.js');


async function getFundamentoProyectivoAspectoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO_ASPECTO_L WHERE idFundamentoProyectivoAspecto = $1';
        const params = [id];
        const FundamentoProyectivoAspecto = await client.query(sql, params);
        res.json({
            data: FundamentoProyectivoAspecto
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createFundamentoProyectivoAspecto(req, res) {

    try {
        const { idAspectoLegal, idFundamentoProyectivo } = req.body;

        const sql = 'INSERT INTO FUNDAMENTO_PROYECTIVO_ASPECTO_L (idAspectoLegal, idFundamentoProyectivo) VALUES ($1, $2)';
        const params = [idAspectoLegal, idFundamentoProyectivo];
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

async function updateFundamentoProyectivoAspecto(req, res) {

    try {
        const { id } = req.params;
        const { idAspectoLegal, idFundamentoProyectivo } = req.body;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO_ASPECTO_L WHERE idFundamentoProyectivoAspecto = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Fundamento proyectivo aspecto legal no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUNDAMENTO_PROYECTIVO_ASPECTO_L SET idAspectoLegal = $1, idFundamentoProyectivo = $2 WHERE idFundamentoProyectivoAspecto = $3';
            const params2 = [idAspectoLegal, idFundamentoProyectivo, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Fundamento proyectivo aspecto legal Updated',
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

async function deleteFundamentoProyectivoAspecto(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO_ASPECTO_L WHERE idFundamentoProyectivoAspecto = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Fundamento proyectivo aspecto legal no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUNDAMENTO_PROYECTIVO_ASPECTO_L SET active = $1 WHERE idFundamentoProyectivoAspecto = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Fundamento proyectivo aspecto legal Updated',
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
    createFundamentoProyectivoAspecto,
    updateFundamentoProyectivoAspecto,
    deleteFundamentoProyectivoAspecto,
    getFundamentoProyectivoAspectoById
}