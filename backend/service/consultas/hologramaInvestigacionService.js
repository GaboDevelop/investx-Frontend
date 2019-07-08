const client = require('../../bd/connection.js');


async function getHologramaInvestigacion(req, res) {

    try {
        const sql = '';
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
    getHologramaInvestigacion: getHologramaInvestigacion
}