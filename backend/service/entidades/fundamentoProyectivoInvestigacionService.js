const client = require('../../bd/connection.js');


async function getFundamentoProyectivoInvestigacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO_INVESTIGACION WHERE idFundamentoProyectivoInvestigacion = $1';
        const params = [id];
        const FundamentoProyectivoInvestigacion = await client.query(sql, params);
        res.json({
            data: FundamentoProyectivoInvestigacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createFundamentoProyectivoInvestigacion(req, res) {

    try {
        const { idFundamentoProyectivo, idTemaInvestigacion } = req.body;

        const sql = 'INSERT INTO FUNDAMENTO_PROYECTIVO_INVESTIGACION (idFundamentoProyectivo, idTemaInvestigacion) VALUES ($1, $2)';
        const params = [idFundamentoProyectivo, idTemaInvestigacion];
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

async function updateFundamentoProyectivoInvestigacion(req, res) {

    try {
        const { id } = req.params;
        const { idFundamentoProyectivo, idTemaInvestigacion } = req.body;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO_INVESTIGACION WHERE idFundamentoProyectivoInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Fundamento Proyectivo Aspecto Legal no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUNDAMENTO_PROYECTIVO_INVESTIGACION SET idFundamentoProyectivo= $1, idTemaInvestigacion = $2 WHERE idFundamentoProyectivoInvestigacion = $3';
            const params2 = [idFundamentoProyectivo, idTemaInvestigacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Fundamento Proyectivo Aspecto Legal Updated',
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

async function deleteFundamentoProyectivoInvestigacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO_INVESTIGACION WHERE idFundamentoProyectivoInvestigacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Fundamento Proyectivo Aspecto Legal no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUNDAMENTO_PROYECTIVO_INVESTIGACION SET active = $1 WHERE idFundamentoProyectivoInvestigacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Fundamento Proyectivo Aspecto Legal Updated',
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
    createFundamentoProyectivoInvestigacion,
    updateFundamentoProyectivoInvestigacion,
    deleteFundamentoProyectivoInvestigacion,
    getFundamentoProyectivoInvestigacionById
}