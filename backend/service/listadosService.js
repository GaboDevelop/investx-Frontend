const client = require('../bd/connection.js');


/* --------------- LISTADO DE ARGUMENTOS DE LA JUSTIFICACION FILTRADO POR LOS DIFERENTES ELEMENTOS CONSTITUTIVOS -----------------*/

/*------------ POR TEMPORALIDAD */

async function getListadoArgumentosByTemporalidad(req, res) {

    try {
        const { idTemporalidad } = req.params; 
        const sql = 'SELECT J.idJustificacion, P.argumento  AS "potencialidad", O.argumento AS "oportunidad", N.argumento AS "necesidad", T.argumento AS "tendencia", CP.argumento AS "curiosidad y preocupacion", C.argumento AS "contradiccion", MI.argumento AS "Motivacion o interes" FROM JUSTIFICACION J JOIN CURIOSIDAD_PREOCUPACION CP ON J.idJustificacion = CP.idJustificacion JOIN CONTRADICCION C ON J.idJustificacion = C.idJustificacion JOIN MOTIVACION_INTERES MI ON J.idJustificacion = MI.idJustificacion JOIN POTENCIALIDAD P ON J.idJustificacion = P.idJustificacion JOIN NECESIDAD N ON J.idJustificacion = N.idJustificacion JOIN OPORTUNIDAD O ON J.idJustificacion = O.idJustificacion JOIN TENDENCIA T ON J.idJustificacion = T.idJustificacion WHERE J.idTemporalidad = $1';
        const params = [idTemporalidad];
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

/*------------ POR CONTEXTO */

async function getListadoArgumentosByContexto(req, res) {

    try {
        const { idContexto } = req.params; 
        const sql = 'SELECT J.idJustificacion, P.argumento  AS "potencialidad", O.argumento AS "oportunidad", N.argumento AS "necesidad", T.argumento AS "tendencia", CP.argumento AS "curiosidad y preocupacion", C.argumento AS "contradiccion", MI.argumento AS "Motivacion o interes" FROM JUSTIFICACION J JOIN CURIOSIDAD_PREOCUPACION CP ON J.idJustificacion = CP.idJustificacion JOIN CONTRADICCION C ON J.idJustificacion = C.idJustificacion JOIN MOTIVACION_INTERES MI ON J.idJustificacion = MI.idJustificacion JOIN POTENCIALIDAD P ON J.idJustificacion = P.idJustificacion JOIN NECESIDAD N ON J.idJustificacion = N.idJustificacion JOIN OPORTUNIDAD O ON J.idJustificacion = O.idJustificacion JOIN TENDENCIA T ON J.idJustificacion = T.idJustificacion WHERE J.idContexto = $1';
        const params = [idContexto];
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

/* ----------- POR UNIDAD DE ESTUDIO */

async function getListadoArgumentosByUnidadEstudio(req, res) {

    try {
        const { idUnidadEstudio } = req.params; 
        const sql = 'SELECT J.idJustificacion, P.argumento  AS "potencialidad", O.argumento AS "oportunidad", N.argumento AS "necesidad", T.argumento AS "tendencia", CP.argumento AS "curiosidad y preocupacion", C.argumento AS "contradiccion", MI.argumento AS "Motivacion o interes FROM JUSTIFICACION J JOIN CURIOSIDAD_PREOCUPACION CP ON J.idJustificacion = CP.idJustificacion JOIN CONTRADICCION C ON J.idJustificacion = C.idJustificacion JOIN MOTIVACION_INTERES MI ON J.idJustificacion = MI.idJustificacion JOIN POTENCIALIDAD P ON J.idJustificacion = P.idJustificacion JOIN NECESIDAD N ON J.idJustificacion = N.idJustificacion JOIN OPORTUNIDAD O ON J.idJustificacion = O.idJustificacion JOIN TENDENCIA T ON J.idJustificacion = T.idJustificacion WHERE J.idUnidadEstudio = $1';
        const params = [idUnidadEstudio];
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

/* ----------- POR EVENTO */

async function getListadoArgumentosByEvento(req, res) {

    try {
        const { idEvento } = req.params; 
        const sql = 'SELECT J.idJustificacion, P.argumento  AS "potencialidad", O.argumento AS "oportunidad", N.argumento AS "necesidad", T.argumento AS "tendencia", CP.argumento AS "curiosidad y preocupacion", C.argumento AS "contradiccion", MI.argumento AS "Motivacion o interes" FROM JUSTIFICACION J JOIN CURIOSIDAD_PREOCUPACION CP ON J.idJustificacion = CP.idJustificacion JOIN CONTRADICCION C ON J.idJustificacion = C.idJustificacion JOIN MOTIVACION_INTERES MI ON J.idJustificacion = MI.idJustificacion JOIN POTENCIALIDAD P ON J.idJustificacion = P.idJustificacion JOIN NECESIDAD N ON J.idJustificacion = N.idJustificacion JOIN OPORTUNIDAD O ON J.idJustificacion = O.idJustificacion JOIN TENDENCIA T ON J.idJustificacion = T.idJustificacion WHERE J.idEvento = $1';
        const params = [idEvento];
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

/* ----------- POR TIPO DE INVESTIGACION */ 

async function getListadoArgumentosByTipoInvestigacion(req, res) {

    try {
        const { idTipoInvestigacion } = req.params; 
        const sql = 'SELECT J.idJustificacion, P.argumento  AS "potencialidad", O.argumento AS "oportunidad", N.argumento AS "necesidad", T.argumento AS "tendencia", CP.argumento AS "curiosidad y preocupacion", C.argumento AS "contradiccion", MI.argumento AS "Motivacion o interes" FROM JUSTIFICACION J JOIN CURIOSIDAD_PREOCUPACION CP ON J.idJustificacion = CP.idJustificacion JOIN CONTRADICCION C ON J.idJustificacion = C.idJustificacion JOIN MOTIVACION_INTERES MI ON J.idJustificacion = MI.idJustificacion JOIN POTENCIALIDAD P ON J.idJustificacion = P.idJustificacion JOIN NECESIDAD N ON J.idJustificacion = N.idJustificacion JOIN OPORTUNIDAD O ON J.idJustificacion = O.idJustificacion JOIN TENDENCIA T ON J.idJustificacion = T.idJustificacion WHERE J.idTipoInvestigacion = $1';
        const params = [idTipoInvestigacion];
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


/* ----------------------- LISTADO DE TIPOS DE INVESTIGACION Y SUS NIVELES ----------------*/

async function getListadoTiposInvestigacionNiveles(req, res) {

    try {
        const sql = 'SELECT TI.idTemaInvestigacion, NI.idNivelInvestigacion, T.idTipoInvestigacion, TI.tema, NI.nivel, T.tipo FROM TEMA_INVESTIGACION TI JOIN NIVEL_INVESTIGACION NI ON TI.idNivelInvestigacion = NI.idNivelInvestigacion JOIN TIPO_INVESTIGACION T ON TI.idTipoInvestigacion = T.idTipoInvestigacion';
        
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

/* ------------------------ LISTADO DE PROYECTOS ABORDADOS FILTRADO POR LOS DIFERENTES ELEMENTOS CONSTITUTIVOS -----------------------*/
/* -------------- POR CONTEXTO*/

async function getListadoProyectosByContexto(req, res) {

    try {
        const sql = 'SELECT P.idProyecto, TI.idTemaInvestigacion, C.idContexto, TI.tema, C.contexto FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN CONTEXTO C ON P.idContexto = C.idContexto';
        
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


/* -------------- POR TEMPORALIDAD*/

async function getListadoProyectosByTemporalidad(req, res) {

    try {
        const sql = 'SELECT P.idProyecto, TI.idTemaInvestigacion, T.idTemporalidad, TI.tema, T.temporalidad FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN TEMPORALIDAD T ON P.idTemporalidad = T.idTemporalidad';
        
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

/* -------------- POR UNIDAD DE ESTUDIO*/


/* -------------- POR POBLACION*/

async function getListadoProyectosByPoblacion(req, res) {

    try {
        const sql = 'SELECT P.idProyecto, TI.idTemaInvestigacion, UE.idUnidadEstudio, TI.tema, PB.poblacion FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN UNIDAD_ESTUDIO UE ON P.idUnidadEstudio = UE.idUnidadEstudio JOIN POBLACION PB ON UE.idPoblacion = PB.idPoblacion ';
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


/* -------------- POR MUESTRA*/

async function getListadoProyectosByMuestra(req, res) {

    try {
        const sql = 'SELECT P.idProyecto, TI.idTemaInvestigacion, UE.idUnidadEstudio, TI.tema, M.muestra FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN UNIDAD_ESTUDIO UE ON P.idUnidadEstudio = UE.idUnidadEstudio JOIN MUESTRA M ON UE.idMuestra = M.idMuestra';
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

/* -------------- POR EVENTO*/

async function getListadoProyectosByEvento(req, res) {

    try {
        const sql = 'SELECT P.idProyecto, TI.idTemaInvestigacion, E.idEvento, TI.tema, E.evento FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN PROYECTIVA PR ON P.idProyectiva = PR.idProyectiva JOIN EVENTO_PROYECTIVA EP ON PR.idProyectiva = EP.idProyectiva JOIN EVENTO E ON EP.idEvento = E.idEvento';
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


/* -------------- POR TIPO DE INVESTIGACION*/

async function getListadoProyectosByTipoInvestigacion(req, res) {

    try {
        const sql = 'SELECT P.idProyecto, TI.idTemaInvestigacion, T.idTipoInvestigacion, TI.tema, T.tipo FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN TIPO_INVESTIGACION	T ON TI.idTipoInvestigacion = T.idTipoInvestigacion';
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


/* -------------- POR NIVEL DE INVESTIGACION*/

async function getListadoProyectosByNivelInvestigacion(req, res) {

    try {
        const sql = 'SELECT P.idProyecto, TI.idTemaInvestigacion, NI.idNivelInvestigacion, TI.tema, NI.nivel FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN NIVEL_INVESTIGACION NI ON TI.idNivelInvestigacion = NI.idNivelInvestigacion';
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

/* ---------------- LISTADO DE TIPOS DE EVENTOS (clase de enventos) ----------------*/

async function getListadoTiposEventos(req, res) {

    try {
        const sql = 'SELECT C.idClaseEvento, C.clase FROM CLASE_EVENTO C';
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


/* ------------------ LISTADO DE NIVELES DE LOS NIVELES DE LA FUNDAMENTACION POSIBLES -------------------*/
/* --------- TODOS LOS NIVELES*/

async function getListadoNivelesFundamentacionAllLevels(req, res) {

    try {
        const sql = 'SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, E.explicacion, A.analisis, C.comparacion, P.prediccion FROM DESCRIPCION_EVENTO D JOIN FUNDAMENTO_PROYECTIVO FP ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo JOIN ANALISIS_EVENTO A ON FP.idFundamentoProyectivo = A.idFundamentoProyectivo JOIN COMPARACION C ON FP.idFundamentoProyectivo = C.idFundamentoProyectivo JOIN EXPLICACION E ON FP.idFundamentoProyectivo = E.idFundamentoProyectivo JOIN PREDICCION P ON FP.idFundamentoProyectivo = P.idFundamentoProyectivo';
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


/* --------- DESCRIPTIVO*/

async function getListadoNivelesFundamentacionDescriptivo(req, res) {

    try {
        const sql = 'SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion FROM DESCRIPCION_EVENTO D JOIN FUNDAMENTO_PROYECTIVO FP ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo';
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


/* --------- DESCRIPTIVO Y ANALITICO*/

async function getListadoNivelesFundamentacionAnalitico(req, res) {

    try {
        const sql = 'SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, A.analisis FROM DESCRIPCION_EVENTO D JOIN FUNDAMENTO_PROYECTIVO FP ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo JOIN ANALISIS_EVENTO A ON FP.idFundamentoProyectivo = A.idFundamentoProyectivo';
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

/* --------- DESCRIPTIVO Y COMPARATIVO*/

async function getListadoNivelesFundamentacionComparativo(req, res) {

    try {
        const sql = 'SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, C.comparacion FROM DESCRIPCION_EVENTO D JOIN FUNDAMENTO_PROYECTIVO FP ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo JOIN COMPARACION C ON FP.idFundamentoProyectivo = C.idFundamentoProyectivo';
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




/* --------- DESCRIPTIVO Y EXPLICATIVO*/

async function getListadoNivelesFundamentacionExplicativo(req, res) {

    try {
        const sql = 'SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, E.explicacion FROM DESCRIPCION_EVENTO D JOIN FUNDAMENTO_PROYECTIVO FP ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo JOIN EXPLICACION E ON FP.idFundamentoProyectivo = E.idFundamentoProyectivo';
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



/* --------- DESCRIPTIVO Y PREDICTIVO*/

async function getListadoNivelesFundamentacionPredictivo(req, res) {

    try {
        const sql = 'SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, P.prediccion FROM DESCRIPCION_EVENTO D JOIN FUNDAMENTO_PROYECTIVO FP ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo JOIN PREDICCION P ON FP.idFundamentoProyectivo = P.idFundamentoProyectivo';
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


/* ------------------- LISTADO DE MODALIDADES POR TIPO --------------*/
/* --------- PROYECTIVA*/

async function getListadoModalidadesProyectiva(req, res) {

    try {
        const {idProyectiva } = req.params;
        const sql = 'SELECT P.modalidad FROM PROYECTO P JOIN TEMA_INVESTIGACION TI ON P.idTemaInvestigacion = TI.idTemaInvestigacion JOIN TIPO_INVESTIGACION T ON TI.idTipoInvestigacion = T.idTipoInvestigacion WHERE T.idTipoInvestigacion = $1';
        const params = [idProyectiva];
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

/* --------------------- LISTADO DE TIPOS DE TECNICAS POSIBLES DE RECOLECCION DE INFORMACION ------------------*/


async function getListadoTiposTecnicasRecoleccion(req, res) {

    try {
        const sql = 'SELECT idTecnicaObtencionInformacion, tecnica FROM TECNICA_OBTENCION_INFORMACION';
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


/* ------------------------- LISTADO DE TIPOS DE TECNICAS POSIBLES DE ANALISIS -------------------*/

async function getListadoTiposTecnicasAnalisis(req, res) {

    try {
        const sql = 'SELECT idTecnicaAnalisis, tecnica FROM TECNICA_ANALISIS';
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

/* ------------------------ LISTADO DE INVESTIGACIONES POR DISCIPLINA O CONDICION TEMATICA ----------------------*/

async function getListadoInvestigacionesDisciplina(req, res) {
    try {
        const {idDisciplina } = req.params;
        const sql = 'SELECT TI.idTemaInvestigacion, TI.idUsuario, TI.idNivelInvestigacion, TI.idTipoInvestigacion, TI.temaIncompleto, TI.tema, TI.situacionPreocupante, TI.conexionOtrosT FROM TEMA_INVESTIGACION TI JOIN PROYECTO P ON p.idTemaInvestigacion = TI.idTemaInvestigacion JOIN PROYECTIVA PR ON P.idProyectiva = PR.idProyectiva JOIN EVENTO_PROYECTIVA EP ON EP.idProyectiva = PR.idProyectiva JOIN EVENTO E ON EP.idEvento = E.idEvento JOIN DISCIPLINA_EVENTO DE ON DE.idEvento = E.idEvento JOIN DISCIPLINA D ON DE.idDisciplina = D.idDisciplina WHERE D.idDisciplina = $1';
        const params = [idDisciplina];
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

/* ------------------------ LISTADO DE CONTEXTOS ATENDIDOS -------------------*/

async function getListadoContextosAtendidos(req, res) {

    try {
        const sql = 'SELECT * FROM CONTEXTO';
        
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


/* ----------------------- LISTADO DE FICHAS POR LOS DIFERENTES TIPOS DE CATEGORIAS, TIPOLOGIAS E INFORMACION CONSTITUTIVA ------------------------*/



/* --------------------- LISTADO DE FICHAS POR CONDICION DE USO EN EL PROYECTO --------------*/



/* ------------------ LISTADO DE TIPOS DE UNIDADES INFORMACION -----------------*/




module.exports ={

    getListadoTiposInvestigacionNiveles:        getListadoTiposInvestigacionNiveles,
    getListadoArgumentosByContexto:             getListadoArgumentosByContexto,
    getListadoArgumentosByEvento:               getListadoArgumentosByEvento,
    getListadoArgumentosByTemporalidad:         getListadoArgumentosByTemporalidad,
    getListadoArgumentosByTipoInvestigacion:    getListadoArgumentosByTipoInvestigacion,
    getListadoArgumentosByUnidadEstudio:        getListadoArgumentosByUnidadEstudio,
    getListadoContextosAtendidos:               getListadoContextosAtendidos,
    getListadoInvestigacionesDisciplina:        getListadoInvestigacionesDisciplina,
    getListadoModalidadesProyectiva:            getListadoModalidadesProyectiva,
    getListadoNivelesFundamentacionAllLevels:   getListadoNivelesFundamentacionAllLevels,
    getListadoNivelesFundamentacionAnalitico:   getListadoNivelesFundamentacionAnalitico,
    getListadoNivelesFundamentacionComparativo: getListadoNivelesFundamentacionComparativo,
    getListadoNivelesFundamentacionDescriptivo: getListadoNivelesFundamentacionDescriptivo,
    getListadoNivelesFundamentacionExplicativo: getListadoNivelesFundamentacionExplicativo,
    getListadoNivelesFundamentacionPredictivo:  getListadoNivelesFundamentacionPredictivo,
    getListadoProyectosByContexto:              getListadoProyectosByContexto,
    getListadoProyectosByEvento:                getListadoProyectosByEvento,
    getListadoProyectosByMuestra:               getListadoProyectosByMuestra,
    getListadoProyectosByNivelInvestigacion:    getListadoProyectosByNivelInvestigacion,
    getListadoProyectosByPoblacion:             getListadoProyectosByPoblacion,
    getListadoProyectosByTemporalidad:          getListadoProyectosByTemporalidad,
    getListadoProyectosByTipoInvestigacion:     getListadoProyectosByTipoInvestigacion,
    getListadoTiposEventos:                     getListadoTiposEventos,
    getListadoTiposTecnicasAnalisis:            getListadoTiposTecnicasAnalisis,
    getListadoTiposTecnicasRecoleccion:         getListadoTiposTecnicasRecoleccion
}