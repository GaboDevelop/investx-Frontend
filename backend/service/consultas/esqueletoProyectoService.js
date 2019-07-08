const client = require('../../bd/connection.js');


async function getEsqueletoProyectoByTemaInvestigacion(req, res) {

    try {
        const { idTemaInvestigacion} = req.params;
        const sql = 'SELECT TI.situacionPreocupante AS "SITUACION PREOCUPANTE", TI.conexionOtrosT AS "CONEXION CON OTROS TEMAS", NI.nivel AS "NIVEL DE LA INVESTIGACION", TI.tema AS "TEMA DE LA INVESTIGACION", T.temporalidad AS "TEMPORALIDAD DE MEDICION", C.contexto AS "CONTEXTO", PB.poblacion AS "POBLACION", M.muestra AS "MUESTRA", N.argumento AS "NECESIDAD", CP.argumento AS "CURIOSIDAD O PREOCUPACION", CT.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES", PD.argumento AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", TA.argumento AS "TENDENCIA", OG.objetivo AS "OBJETIVO GENERAL" FROM TEMA_INVESTIGACION TI JOIN PROYECTO P ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN TIPO_INVESTIGACION TP ON TI.idTipoInvestigacion = TP.idTipoInvestigacion JOIN PROYECTIVA PA ON P.idProyectiva = PA.idProyectiva JOIN EVENTO_PROYECTIVA EP ON PA.idProyectiva = EP.idProyectiva JOIN EVENTO E ON EP.idEvento = E.idEvento JOIN NIVEL_INVESTIGACION NI ON TI.idNivelInvestigacion = NI.idNivelInvestigacion JOIN TEMPORALIDAD_MEDICION T ON P.idTemporalidad = T.idTemporalidad JOIN CONTEXTO C ON P.idContexto = C.idContexto JOIN UNIDAD_ESTUDIO UE ON P.idUnidadEstudio = UE.idUnidadEstudio JOIN POBLACION PB ON UE.idPoblacion = PB.idPoblacion JOIN MUESTRA M ON UE.idMuestra = M.idMuestra JOIN JUSTIFICACION J ON T.idTemporalidad = J.idTemporalidad JOIN NECESIDAD N ON J.idJustificacion = N.idJustificacion JOIN CURIOSIDAD_PREOCUPACION CP ON J.idJustificacion = CP.idJustificacion JOIN CONTRADICCION CT ON J.idJustificacion = CT.idJustificacion JOIN MOTIVACION_INTERES MI ON J.idJustificacion = MI.idJustificacion JOIN POTENCIALIDAD PD ON J.idJustificacion = PD.idJustificacion JOIN OPORTUNIDAD O ON J.idJustificacion = O.idJustificacion JOIN TENDENCIA TA ON J.idJustificacion = TA.idJustificacion JOIN OBJETIVO_GENERAL OG ON PA.idProyectiva = OG.idProyectiva WHERE TI.idTemaInvestigacion = $1';
        const params = [ idTemaInvestigacion];
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

module.exports = {
    getEsqueletoProyectoByTemaInvestigacion: getEsqueletoProyectoByTemaInvestigacion
}