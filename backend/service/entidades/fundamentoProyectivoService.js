const client = require('../../bd/connection.js');

async function getFundamentos(req, res) {

    try {
        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO';
        
        const proyectivas = await client.query(sql);
        res.json({
            data: proyectivas
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function getFundamentoById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO WHERE idFundamentoProyectivo = $1';
        const params = [id];
        const fundamento = await client.query(sql, params);
        res.json({
            data: fundamento
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createFundamento(req, res) {

    try {
        const { idProyectiva, teoria } = req.body;

        const sql = 'INSERT INTO FUNDAMENTO_PROYECTIVO (idProyectiva, teoria) VALUES ($1, $2)';
        const params = [idProyectiva, teoria];
        const fundamento = await client.query(sql, params);
        res.json({
            data: fundamento
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function updateFundamento(req, res) {

    try {
        const { id } = req.params;
        const {  idProyectiva, teoria } = req.body;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO WHERE idFundamentoProyectivo = $1';
        const params = [id];
        const fundamentos = await client.query(sql, params);
        
        
        if (fundamentos.length = 0) { 
            return res.json({
            message: 'Proyectiva no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUNDAMENTO_PROYECTIVO SET idProyectiva = $1, teoria = $2  WHERE idFundamentoProyectivo = $3';
            const params2 = [idProyectiva, teoria, id];
            const fundamento = await client.query(sql2, params2);
            return res.json({
                message: 'fundamento Updated',
                data: fundamento
            })
        

    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function deleteFundamento(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM FUNDAMENTO_PROYECTIVO WHERE idFundamentoProyectivo = $1';
        const params = [id];
        const fundamentos = await client.query(sql, params);
        
        
        if (fundamentos.length = 0) { 
            return res.json({
            message: 'Fundamento no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE FUNDAMENTO_PROYECTIVO SET active = $1  WHERE idFundamentoProyectivo = $2';
            const params2 = [false, id];
            const fundamento = await client.query(sql2, params2);
            return res.json({
                message: 'fundamento Updated',
                data: fundamento
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
    getFundamentos: getFundamentos,
    getFundamentoById: getFundamentoById, 
    createFundamento: createFundamento,
    updateFundamento: updateFundamento,
    deleteFundamento: deleteFundamento
}