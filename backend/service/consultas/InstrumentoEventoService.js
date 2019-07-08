const client = require('../../bd/connection.js');

async function getInstrumentoEvento(req, res) {

    try {
        const sql = 'SELECT E.evento, I.instrumento FROM EVENTO E JOIN INSTRUMENTO I ON E.idEvento = I.idEvento';
        const table = await client.query(sql);
        res.json({
            data: table
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
    getInstrumentoEvento: getInstrumentoEvento
}