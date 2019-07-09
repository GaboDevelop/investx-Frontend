const client = require('../../bd/connection.js');


async function getPerspectivaInterpretacionById(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PERSPECTIVA_INTERPRETACION WHERE idPerspectivaInterpretacion = $1';
        const params = [id];
        const PerspectivaInterpretacion = await client.query(sql, params);
        res.json({
            data: PerspectivaInterpretacion
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Something goes wrong'
        });
    }

};

async function createPerspectivaInterpretacion(req, res) {

    try {
        const { perspectivaInterpretacion } = req.body;

        const sql = 'INSERT INTO PERSPECTIVA_INTERPRETACION (perspectivaInterpretacion) VALUES ($1)';
        const params = [perspectivaInterpretacion];
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

async function updatePerspectivaInterpretacion(req, res) {

    try {
        const { id } = req.params;
        const { perspectivaInterpretacion } = req.body;

        const sql = 'SELECT * FROM PERSPECTIVA_INTERPRETACION WHERE idPerspectivaInterpretacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Perspectiva Interpretacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PERSPECTIVA_INTERPRETACION SET perspectivaInterpretacion = $1 WHERE idPerspectivaInterpretacion = $2';
            const params2 = [perspectivaInterpretacion, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Perspectiva Interpretacion Updated',
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

async function deletePerspectivaInterpretacion(req, res) {

    try {
        const { id } = req.params;

        const sql = 'SELECT * FROM PERSPECTIVA_INTERPRETACION WHERE idPerspectivaInterpretacion = $1';
        const params = [id];
        const users = await client.query(sql, params);
        
        
        if (users.length = 0) { 
            return res.json({
            message: 'Perspectiva Interpretacion no existe',
            data: {}
            });
        }
            const sql2 = 'UPDATE PERSPECTIVA_INTERPRETACION SET active = $1 WHERE idPerspectivaInterpretacion = $2';
            const params2 = [false, id];
            const user = await client.query(sql2, params2);
            return res.json({
                message: 'Perspectiva Interpretacion Updated',
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
    createPerspectivaInterpretacion,
    updatePerspectivaInterpretacion,
    deletePerspectivaInterpretacion,
    getPerspectivaInterpretacionById
}