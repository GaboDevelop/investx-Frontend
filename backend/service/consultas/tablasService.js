const client = require('../../bd/connection.js');




/* ---------------- TABLA DE OPERACIONALIZACION -----------------------*/

async function getTablaOperacionalizacion(req, res) {

    try {
        const {id}= req.params;
        const sql = 'SELECT E.evento, S.sinergia,I.indicio,IM.item,E.parametro,IO.instrumento,IO.nivel,F.fuente FROM PROYECTIVA PAJOIN EVENTO_PROYECTIVA EP ON PA.idProyectiva = EP.idProyectiva JOIN EVENTO E ON EP.idEvento = E.idEvento JOIN SINERGIA S ON E.idEvento = S.idEvento JOIN INSTRUMENTO IO ON E.idEvento = IO.idEvento JOIN INDICIO I ON S.idSinergia = I.idSinergia JOIN ITEM IM ON IO.idInstrumento = IM.idInstrumento JOIN FUENTE F ON IO.idInstrumento = F.idInstrumento JOIN PROYECTO P ON PA.idProyectiva = P.idProyectiva WHERE P.idProyecto = $1';
        const params = [id];
        const table = await client.query(sql, params);
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




/* ---------------- TABLA DE ESPECIFIACIONES -------------------*/

async function getTablaEspecificaciones(req, res) {

    try {
        const {id}= req.params;
        const sql = 'SELECT S.sinergia,I.indicio,IM.item FROM PROYECTIVA PA JOIN EVENTO_PROYECTIVA EP ON PA.idProyectiva = EP.idProyectiva JOIN EVENTO E ON EP.idEvento = E.idEvento JOIN SINERGIA S ON E.idEvento = S.idEvento JOIN INSTRUMENTO IO ON E.idEvento = IO.idEvento JOIN INDICIO I ON S.idSinergia = I.idSinergia JOIN ITEM IM ON IO.idInstrumento = IM.idInstrumento JOIN PROYECTO P ON PA.idProyectiva = P.idProyectiva WHERE P.idProyecto = $1';
        const params = [id];
        const table = await client.query(sql,params);
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


/* ---------------- TABLA DE POBLACION Y MUESTRA -----------------------*/

async function getTablaPoblacionMuestra(req, res) {

    try {
        const sql = 'SELECT U.idUnidadEstudio, P.poblacion, M.muestra FROM POBLACION P JOIN UNIDAD_ESTUDIO U ON U.idPoblacion = P.idPoblacion JOIN MUESTRA M ON U.idMuestra = M.idMuestra';
        
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


/* --------------- TABLA DE LOS ARGUMENTOS DE LA JUSTIFICACION -----------------*/

async function getTablaArgumentosJustificacion(req, res) {

    try {
        const sql = 'SELECT P.argumento  AS "potencialidad", O.argumento AS "oportunidad", N.argumento AS "necesidad", T.argumento AS "tendencia", CP.argumento AS "curiosidad y preocupacion", C.argumento AS "contradiccion", MI.argumento AS "Motivacion o interes" FROM JUSTIFICACION J JOIN POTENCIALIDAD P ON J.idJustificacion = P.idJustificacion JOIN OPORTUNIDAD O ON J.idJustificacion = O.idJustificacion JOIN NECESIDAD N ON J.idJustificacion = N.idJustificacion JOIN TENDENCIA T ON J.idJustificacion = T.idJustificacion JOIN CURIOSIDAD_PREOCUPACION CP ON J.idJustificacion = CP.idJustificacion JOIN CONTRADICCION C ON J.idJustificacion = C.idJustificacion JOIN MOTIVACION_INTERES MI ON J.idJustificacion = MI.idJustificacion';
        
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


/* --------------------- TABLA HOLOPRAXICA --------------------- */


async function getTablaHolopraxica(req, res) {

    try {
        const sql = 'SELECT OE.objetivo AS "Objetivo especifico", E.estadio AS "Estadio", EV.evento AS "Evento", UE.descripcion AS "Unidad de Estudio", PO.poblacion AS "POBLACION", M.muestra AS "MUESTRA", TOI.tecnica AS "Tecnica", I.instrumento AS "Instrumento", AE.analisis AS "Analisis del evento" FROM PROYECTO P JOIN OBJETIVO_ESPECIFICO OE ON OE.idProyectiva = P.idProyectiva JOIN ESTADIO E ON E.idEstadio = OE.idEstadio JOIN UNIDAD_INFORMATIVA UI ON UI.idProyectiva = P.idProyectiva JOIN EVENTO EV ON EV.idEvento = UI.idEvento JOIN UNIDAD_ESTUDIO UE ON UE.idUnidadEstudio = P.idUnidadEstudio JOIN POBLACION PO ON PO.idPoblacion = UE.idPoblacion JOIN MUESTRA M ON M.idMuestra = UE.idMuestra JOIN TECNICA_OBTENCION_INFORMACION_U TOIU ON TOIU.idUnidadEstudio = UE.idUnidadEstudio JOIN TECNICA_OBTENCION_INFORMACION  TOI ON TOI.idTecnicaObtencionInformacion =TOIU.idTecnicaObtencionInformacion JOIN INSTRUMENTO I ON I.idEvento = EV.idEvento JOIN FUNDAMENTO_PROYECTIVO FP ON FP.idProyectiva = P.idProyectiva JOIN ANALISIS_EVENTO AE ON AE.idFundamentoProyectivo = FP.idFundamentoProyectivo';
        
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
    getTablaHolopraxica: getTablaHolopraxica,
    getTablaArgumentosJustificacion: getTablaArgumentosJustificacion,
    getTablaPoblacionMuestra: getTablaPoblacionMuestra,
    getTablaEspecificaciones: getTablaEspecificaciones,
    getTablaOperacionalizacion: getTablaOperacionalizacion

}

