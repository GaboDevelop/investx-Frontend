/*1 - LISTADO DE USUARIOS CON SUS ROLES*/
SELECT U.idUsuario, U.correo, U.contrasena, U.nombre, U.segundoNombre, U.apellido, U.segundoApellido, R.nombreRol, U.active
FROM USUARIO U
    INNER JOIN ROL_USUARIO RU
    ON U.idUsuario = RU.idUsuario
    INNER JOIN ROL R
    ON R.idRol = RU.idRol

/*2 - HOLOGRAMA DE LA INVESTIGACION*/

/*3 - TABLA DE OPERACIONALIZACION*/

/*4 - TABLA DE ESPECIFIACIONES*/

/*5 - TABLA DE POBLACION Y MUESTRA*/
SELECT U.idUnidadEstudio, P.poblacion, M.muestra
FROM POBLACION P
    JOIN UNIDAD_ESTUDIO U
    ON U.idPoblacion = P.idPoblacion
    JOIN MUESTRA M
    ON U.idMuestra = M.idMuestra

/*6 - TABLA DE LOS ARGUMENTOS DE LA JUSTIFICACION*/
SELECT P.argumento  AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", N.argumento AS "NECESIDAD", T.argumento AS "TENDENCIA", CP.argumento AS "CURIOSIDAD Y PREOCUPACION", C.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES"
FROM JUSTIFICACION J
    JOIN POTENCIALIDAD P
    ON J.idJustificacion = P.idJustificacion
    JOIN OPORTUNIDAD O
    ON J.idJustificacion = O.idJustificacion
    JOIN NECESIDAD N
    ON J.idJustificacion = N.idJustificacion
    JOIN TENDENCIA T
    ON J.idJustificacion = T.idJustificacion
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON J.idJustificacion = CP.idJustificacion
    JOIN CONTRADICCION C
    ON J.idJustificacion = C.idJustificacion
    JOIN MOTIVACION_INTERES MI
    ON J.idJustificacion = MI.idJustificacion

/*7 - LISTADO DE FICHAS POR LOS DIFERENTES TIPOS DE CATEGORIAS, TIPOLOGIAS E INFORMACION CONSTITUTIVA*/
/*POR CATEGORIA*/
SELECT C.relacionTemaUnidad AS "CATEGORIA",UI.idea AS "FICHA" 
FROM UNIDAD_INFORMATIVA UI
	JOIN CATEGORIA_UNIDAD_INFORMATIVA CUI
	ON UI.idUnidadInformativa = CUI.idUnidadInformativa
	JOIN CATEGORIA C
	ON CUI.idCategoria = C.idCategoria

/*POR SEMEJANZA*/
SELECT S.semejanza AS "SEMEJANZA",UI.idea AS "FICHA" 
FROM UNIDAD_INFORMATIVA UI
	JOIN CATEGORIA_UNIDAD_INFORMATIVA CUI
	ON UI.idUnidadInformativa = CUI.idUnidadInformativa
	JOIN CATEGORIA C
	ON CUI.idCategoria = C.idCategoria
	JOIN SEMEJANZA_CATEGORIA SC
	ON C.idCategoria = SC.idCategoria
	JOIN SEMEJANZA S
	ON SC.idSemejanza = S.idSemejanza

/*POR DIFERENCIA*/
SELECT D.diferencia AS "DIFERENCIA",UI.idea AS "FICHA" 
FROM UNIDAD_INFORMATIVA UI
	JOIN CATEGORIA_UNIDAD_INFORMATIVA CUI
	ON UI.idUnidadInformativa = CUI.idUnidadInformativa
	JOIN CATEGORIA C
	ON CUI.idCategoria = C.idCategoria
	JOIN DIFERENCIA_CATEGORIA DC
	ON C.idCategoria = DC.idCategoria
	JOIN DIFERENCIA D
	ON DC.idDiferencia = D.idDiferencia

/*8 - LISTADO DE FICHAS POR CONDICION DE USO EN EL PROYECTO*/
SELECT UI.idea AS "FICHA" 
FROM UNIDAD_INFORMATIVA UI
	JOIN PROYECTIVA PA
	ON UI.idProyectiva = PA.idProyectiva
	JOIN PROYECTO P
	ON PA.idProyectiva = P.idProyectiva
WHERE P.idProyecto = 1

/*9 - LISTADO DE TIPOS DE INVESTIGACION Y SUS NIVELES*/
SELECT TI.idTemaInvestigacion, NI.idNivelInvestigacion, T.idTipoInvestigacion, TI.tema, NI.nivel, T.tipo
FROM TEMA_INVESTIGACION TI
    JOIN NIVEL_INVESTIGACION NI
    ON TI.idNivelInvestigacion = NI.idNivelInvestigacion
    JOIN TIPO_INVESTIGACION T
    ON TI.idTipoInvestigacion = T.idTipoInvestigacion

/*10 - LISTADO DE ARGUMENTOS DE LA JUSTIFICACION FILTRADO POR LOS DIFERENTES ELEMENTOS CONSTITUTIVOS*/
/*POR TEMPORALIDAD*/
SELECT J.idJustificacion, P.argumento  AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", N.argumento AS "NECESIDAD", T.argumento AS "TENDENCIA", CP.argumento AS "CURIOSIDAD Y PREOCUPACION", C.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES"
FROM JUSTIFICACION J
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON J.idJustificacion = CP.idJustificacion
    JOIN CONTRADICCION C
    ON J.idJustificacion = C.idJustificacion
    JOIN MOTIVACION_INTERES MI
    ON J.idJustificacion = MI.idJustificacion
    JOIN POTENCIALIDAD P
    ON J.idJustificacion = P.idJustificacion
    JOIN NECESIDAD N
    ON J.idJustificacion = N.idJustificacion
    JOIN OPORTUNIDAD O
    ON J.idJustificacion = O.idJustificacion
    JOIN TENDENCIA T
    ON J.idJustificacion = T.idJustificacion
WHERE J.idTemporalidad = 8963

/*POR CONTEXTO*/
SELECT J.idJustificacion, P.argumento  AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", N.argumento AS "NECESIDAD", T.argumento AS "TENDENCIA", CP.argumento AS "CURIOSIDAD Y PREOCUPACION", C.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES"
FROM JUSTIFICACION J
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON J.idJustificacion = CP.idJustificacion
    JOIN CONTRADICCION C
    ON J.idJustificacion = C.idJustificacion
    JOIN MOTIVACION_INTERES MI
    ON J.idJustificacion = MI.idJustificacion
    JOIN POTENCIALIDAD P
    ON J.idJustificacion = P.idJustificacion
    JOIN NECESIDAD N
    ON J.idJustificacion = N.idJustificacion
    JOIN OPORTUNIDAD O
    ON J.idJustificacion = O.idJustificacion
    JOIN TENDENCIA T
    ON J.idJustificacion = T.idJustificacion
WHERE J.idContexto = 7546

/*POR UNIDAD DE ESTUDIO*/
SELECT J.idJustificacion, P.argumento  AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", N.argumento AS "NECESIDAD", T.argumento AS "TENDENCIA", CP.argumento AS "CURIOSIDAD Y PREOCUPACION", C.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES"
FROM JUSTIFICACION J
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON J.idJustificacion = CP.idJustificacion
    JOIN CONTRADICCION C
    ON J.idJustificacion = C.idJustificacion
    JOIN MOTIVACION_INTERES MI
    ON J.idJustificacion = MI.idJustificacion
    JOIN POTENCIALIDAD P
    ON J.idJustificacion = P.idJustificacion
    JOIN NECESIDAD N
    ON J.idJustificacion = N.idJustificacion
    JOIN OPORTUNIDAD O
    ON J.idJustificacion = O.idJustificacion
    JOIN TENDENCIA T
    ON J.idJustificacion = T.idJustificacion
WHERE J.idUnidadEstudio = 489

/*POR EVENTO*/
SELECT J.idJustificacion, P.argumento  AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", N.argumento AS "NECESIDAD", T.argumento AS "TENDENCIA", CP.argumento AS "CURIOSIDAD Y PREOCUPACION", C.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES"
FROM JUSTIFICACION J
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON J.idJustificacion = CP.idJustificacion
    JOIN CONTRADICCION C
    ON J.idJustificacion = C.idJustificacion
    JOIN MOTIVACION_INTERES MI
    ON J.idJustificacion = MI.idJustificacion
    JOIN POTENCIALIDAD P
    ON J.idJustificacion = P.idJustificacion
    JOIN NECESIDAD N
    ON J.idJustificacion = N.idJustificacion
    JOIN OPORTUNIDAD O
    ON J.idJustificacion = O.idJustificacion
    JOIN TENDENCIA T
    ON J.idJustificacion = T.idJustificacion
WHERE J.idEvento = 4256

/*POR TIPO DE INVESTIGACION*/
SELECT J.idJustificacion, P.argumento  AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", N.argumento AS "NECESIDAD", T.argumento AS "TENDENCIA", CP.argumento AS "CURIOSIDAD Y PREOCUPACION", C.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES"
FROM JUSTIFICACION J
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON J.idJustificacion = CP.idJustificacion
    JOIN CONTRADICCION C
    ON J.idJustificacion = C.idJustificacion
    JOIN MOTIVACION_INTERES MI
    ON J.idJustificacion = MI.idJustificacion
    JOIN POTENCIALIDAD P
    ON J.idJustificacion = P.idJustificacion
    JOIN NECESIDAD N
    ON J.idJustificacion = N.idJustificacion
    JOIN OPORTUNIDAD O
    ON J.idJustificacion = O.idJustificacion
    JOIN TENDENCIA T
    ON J.idJustificacion = T.idJustificacion
WHERE J.idTipoInvestigacion = 2

/*11 - INSTRUMENTO POR EVENTO*/
SELECT E.evento, I.instrumento
FROM EVENTO E
    JOIN INSTRUMENTO I
    ON E.idEvento = I.idEvento

/*12 - ESQUELETO DEL INFORME DEL PROYECTO*/
SELECT TI.situacionPreocupante AS "SITUACION PREOCUPANTE", TI.conexionOtrosT AS "CONEXION CON OTROS TEMAS", NI.nivel AS "NIVEL DE LA INVESTIGACION", T.temporalidad AS "TEMPORALIDAD DE MEDICION", C.contexto AS "CONTEXTO", PB.poblacion AS "POBLACION", M.muestra AS "MUESTRA", N.argumento AS "NECESIDAD", CP.argumento AS "CURIOSIDAD O PREOCUPACION", CT.argumento AS "CONTRADICCION", MI.argumento AS "MOTIVACION O INTERES", PD.argumento AS "POTENCIALIDAD", O.argumento AS "OPORTUNIDAD", TA.argumento AS "TENDENCIA", OG.objetivo AS "OBJETIVO GENERAL",OE.objetivo AS "OBJETIVO ESPECIFICO",ET.estadio AS "ESTADIO",FP.teoria AS "TEORIA",E.evento AS "EVENTO",CE.clase AS "CLASE DE EVENTO",DE.definicion AS "DEFINICION EVENTO",DE.explicacion AS "EXPLICACION DE LA DEFINICION",AL.aspecto AS "ASPECTO LEGAL", TI.tema AS "TEMA DE LA INVESTIGACION",EPR.estructuracionPrevia AS "ESTRUCTURACION PREVIA",PI.perspectivaInterpretacion AS "PERSPECTIVA DE INTERPRETACION",GP.gradoParticipacion AS "GRADO DE PARTICIPACION",DI.tipo AS "DISEÑO DE LA INVESTIGACION",TOI.tecnica AS "TECNICA DE OBTENCION DE INFORMACION",I.instrumento AS "INSTRUMENTO DE RECOLECCION DE DATOS",TS.tecnica AS "TECNICA ANALISIS"
FROM TEMA_INVESTIGACION TI
    JOIN PROYECTO P
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN TIPO_INVESTIGACION TP
    ON TI.idTipoInvestigacion = TP.idTipoInvestigacion
    JOIN PROYECTIVA PA
    ON P.idProyectiva = PA.idProyectiva
    JOIN EVENTO_PROYECTIVA EP
    ON PA.idProyectiva = EP.idProyectiva
    JOIN EVENTO E
    ON EP.idEvento = E.idEvento
	JOIN CLASE_EVENTO CE
	ON E.idClaseEvento = CE.idClaseEvento
	JOIN INSTRUMENTO I
	ON E.idEvento = I.idEvento
    JOIN NIVEL_INVESTIGACION NI
    ON TI.idNivelInvestigacion = NI.idNivelInvestigacion
    JOIN TEMPORALIDAD_MEDICION T
    ON P.idTemporalidad = T.idTemporalidad
    JOIN CONTEXTO C
    ON P.idContexto = C.idContexto
    JOIN UNIDAD_ESTUDIO UE
    ON P.idUnidadEstudio = UE.idUnidadEstudio   
	JOIN TECNICA_OBTENCION_INFORMACION_U TOIU
	ON UE.idUnidadEstudio = TOIU.idUnidadEstudio
	JOIN TECNICA_OBTENCION_INFORMACION TOI
	ON TOIU.idTecnicaObtencionInformacion = TOI.idTecnicaObtencionInformacion
    JOIN POBLACION PB
    ON UE.idPoblacion = PB.idPoblacion
    JOIN MUESTRA M
    ON UE.idMuestra = M.idMuestra
    JOIN JUSTIFICACION J
    ON T.idTemporalidad = J.idTemporalidad
    JOIN NECESIDAD N
    ON J.idJustificacion = N.idJustificacion
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON J.idJustificacion = CP.idJustificacion
    JOIN CONTRADICCION CT
    ON J.idJustificacion = CT.idJustificacion
    JOIN MOTIVACION_INTERES MI
    ON J.idJustificacion = MI.idJustificacion
    JOIN POTENCIALIDAD PD
    ON J.idJustificacion = PD.idJustificacion
    JOIN OPORTUNIDAD O
    ON J.idJustificacion = O.idJustificacion
    JOIN TENDENCIA TA
    ON J.idJustificacion = TA.idJustificacion
    JOIN OBJETIVO_GENERAL OG
    ON PA.idProyectiva = OG.idProyectiva
	JOIN OBJETIVO_ESPECIFICO OE
	ON PA.idProyectiva = OE.idProyectiva
	JOIN ESTADIO ET
	ON OE.idEstadio = ET.idEstadio
	JOIN FUNDAMENTO_PROYECTIVO FP
	ON PA.idProyectiva = FP.idProyectiva
	JOIN DESCRIPCION_EVENTO DE
	ON FP.idFundamentoProyectivo = DE.idFundamentoProyectivo
	JOIN FUNDAMENTO_PROYECTIVO_ASPECTO_L FPAL
	ON FP.idFundamentoProyectivo = FPAL.idFundamentoProyectivo
	JOIN ASPECTO_LEGAL AL
	ON AL.idAspectoLegal = FPAL.idAspectoLegal
	JOIN ABORDAJE A
	ON A.idProyectiva = PA.idProyectiva
	JOIN ESTRUCTURACION_PREVIA EPR
	ON A.idEstructuracionPrevia = EPR.idEstructuracionPrevia
	JOIN PERSPECTIVA_INTERPRETACION PI
	ON A.idPerspectivaInterpretacion = PI.idPerspectivaInterpretacion
	JOIN GRADO_PARTICIPACION GP
	ON A.idGradoParticipacion = GP.idGradoParticipacion	
	JOIN DISENO_INVESTIGACION DI
	ON PA.idDisenoInvestigacion = DI.idDisenoInvestigacion
	FULL OUTER JOIN ANALISIS_EVENTO AE
	ON FP.idFundamentoProyectivo = AE.idFundamentoProyectivo
	FULL OUTER JOIN TECNICA_ANALISIS TS
	ON AE.idTecnicaAnalisis = TS.idTecnicaAnalisis
WHERE TI.idTemaInvestigacion = 45

/*13 - REPORTE DE CALIDAD DEL PROYECTO DE HURTADO*/
/*JUSTIFICACION*/
SELECT ((SELECT count(*) FROM NECESIDAD WHERE idJustificacion = J.idJustificacion LIMIT 1)+
		(SELECT count(*) FROM CONTEXTO WHERE idContexto = P.idContexto LIMIT 1)+
		(SELECT count(*) FROM UNIDAD_ESTUDIO WHERE idUnidadEstudio = P.idUnidadEstudio LIMIT 1)+
		(SELECT count(*) FROM EVENTO WHERE idEvento = J.idEvento LIMIT 1)+
		(SELECT count(*) FROM TIPO_INVESTIGACION WHERE idTipoInvestigacion = J.idTipoInvestigacion LIMIT 1)+
	   	(SELECT count(*) FROM UNIDAD_INFORMATIVA UI WHERE UI.idProyectiva = PR.idProyectiva LIMIT 1))/6*100 as "PORCENTAJE DE CALIDAD"
FROM JUSTIFICACION J 
JOIN PROYECTO P 
ON J.idContexto = P.idContexto
JOIN PROYECTIVA PR 
ON PR.idProyectiva = P.idProyectiva
WHERE P.idProyecto = 1

/*14 - HISTORIAL DE MODIFICACIOES DEL PROYECTO*/
SELECT V.idVersion, TI.idTemaInvestigacion, V.fecha
FROM VERSION V
    JOIN TEMA_INVESTIGACION TI
    ON V.idTemaInvestigacion = TI.idTemaInvestigacion
WHERE TI.idTemaInvestigacion = 20

/*15 - LISTA INSTITUCIONES DE INVESTIGACION*/
SELECT U.nombre
FROM USUARIO U
    JOIN ROL_USUARIO RU
    ON U.idUsuario = RU.idUsuario
    JOIN ROL R
    ON R.idRol = RU.idRol
WHERE R.idRol = 75

/*16 - LISTADO DE CONTEXTOS ATENDIDOS*/
SELECT *
FROM CONTEXTO

/*17 - LISTADO DE PROYECTOS ABORDADOS FILTRADO POR LOS DIFERENTES ELEMENTOS CONSTITUTIVOS*/
/*POR CONTEXTO*/
SELECT P.idProyecto, TI.idTemaInvestigacion, C.idContexto, TI.tema, C.contexto
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN CONTEXTO C
    ON P.idContexto = C.idContexto

/*POR TEMPORALIDAD*/
SELECT P.idProyecto, TI.idTemaInvestigacion, T.idTemporalidad, TI.tema, T.temporalidad
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN TEMPORALIDAD T
    ON P.idTemporalidad = T.idTemporalidad

/*POR UNIDAD DE ESTUDIO*/
/*POR POBLACION*/
SELECT P.idProyecto, TI.idTemaInvestigacion, UE.idUnidadEstudio, TI.tema, PB.poblacion
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN UNIDAD_ESTUDIO UE
    ON P.idUnidadEstudio = UE.idUnidadEstudio
    JOIN POBLACION PB
    ON UE.idPoblacion = PB.idPoblacion
/*POR MUESTRA*/
SELECT P.idProyecto, TI.idTemaInvestigacion, UE.idUnidadEstudio, TI.tema, M.muestra
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN UNIDAD_ESTUDIO UE
    ON P.idUnidadEstudio = UE.idUnidadEstudio
    JOIN MUESTRA M
    ON UE.idMuestra = M.idMuestra

/*POR EVENTO*/
SELECT P.idProyecto, TI.idTemaInvestigacion, E.idEvento, TI.tema, E.evento
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN PROYECTIVA PR
    ON P.idProyectiva = PR.idProyectiva
    JOIN EVENTO_PROYECTIVA EP
    ON PR.idProyectiva = EP.idProyectiva
    JOIN EVENTO E
    ON EP.idEvento = E.idEvento

/*POR TIPO DE INVESTIGACION*/
SELECT P.idProyecto, TI.idTemaInvestigacion, T.idTipoInvestigacion, TI.tema, T.tipo
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN TIPO_INVESTIGACION	T
    ON TI.idTipoInvestigacion = T.idTipoInvestigacion

/*POR NIVEL DE INVESTIGACION*/
SELECT P.idProyecto, TI.idTemaInvestigacion, NI.idNivelInvestigacion, TI.tema, NI.nivel
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN NIVEL_INVESTIGACION NI
    ON TI.idNivelInvestigacion = NI.idNivelInvestigacion

/*18 - LISTADO DE TIPOS DE EVENTOS (clase de enventos)*/
SELECT C.idClaseEvento, C.clase
FROM CLASE_EVENTO C;

/*19 - LISTADO DE TIPOS DE UNIDADES INFORMACION*/

/*20 - LISTADO DE NIVELES DE LOS NIVELES DE LA FUNDAMENTACION POSIBLES*/
/*TODOS LOS NIVELES*/
SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, E.explicacion, A.analisis, C.comparacion, P.prediccion
FROM DESCRIPCION_EVENTO D
    JOIN FUNDAMENTO_PROYECTIVO FP
    ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo
    JOIN ANALISIS_EVENTO A
    ON FP.idFundamentoProyectivo = A.idFundamentoProyectivo
    JOIN COMPARACION C
    ON FP.idFundamentoProyectivo = C.idFundamentoProyectivo
    JOIN EXPLICACION E
    ON FP.idFundamentoProyectivo = E.idFundamentoProyectivo
    JOIN PREDICCION P
    ON FP.idFundamentoProyectivo = P.idFundamentoProyectivo

/*DESCRIPTIVO*/
SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion
FROM DESCRIPCION_EVENTO D
    JOIN FUNDAMENTO_PROYECTIVO FP
    ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo

/*DESCRIPTIVO Y ANALITICO*/
SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, A.analisis
FROM DESCRIPCION_EVENTO D
    JOIN FUNDAMENTO_PROYECTIVO FP
    ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo
    JOIN ANALISIS_EVENTO A
    ON FP.idFundamentoProyectivo = A.idFundamentoProyectivo

/*DESCRIPTIVO Y COMPARATIVO*/
SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, C.comparacion
FROM DESCRIPCION_EVENTO D
    JOIN FUNDAMENTO_PROYECTIVO FP
    ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo
    JOIN COMPARACION C
    ON FP.idFundamentoProyectivo = C.idFundamentoProyectivo

/*DESCRIPTIVO Y EXPLICATIVO*/
SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, E.explicacion
FROM DESCRIPCION_EVENTO D
    JOIN FUNDAMENTO_PROYECTIVO FP
    ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo
    JOIN EXPLICACION E
    ON FP.idFundamentoProyectivo = E.idFundamentoProyectivo

/*DESCRIPTIVO Y PREDICTIVO*/
SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, P.prediccion
FROM DESCRIPCION_EVENTO D
    JOIN FUNDAMENTO_PROYECTIVO FP
    ON FP.idFundamentoProyectivo = D.idFundamentoProyectivo
    JOIN PREDICCION P
    ON FP.idFundamentoProyectivo = P.idFundamentoProyectivo

/*21 - LISTADO DE MODALIDADES POR TIPO*/
/*PROYECTIVA*/
SELECT P.modalidad
FROM PROYECTO P
    JOIN TEMA_INVESTIGACION TI
    ON P.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN TIPO_INVESTIGACION T
    ON TI.idTipoInvestigacion = T.idTipoInvestigacion
WHERE T.idTipoInvestigacion = 2

/*22 - LISTADO DE TIPOS DE TECNICAS POSIBLES DE RECOLECCION DE INFORMACION*/
SELECT idTecnicaObtencionInformacion, tecnica
FROM TECNICA_OBTENCION_INFORMACION

/*23 - LISTADO DE TIPOS DE TECNICAS POSIBLES DE ANALISIS*/
SELECT idTecnicaAnalisis, tecnica
FROM TECNICA_ANALISIS

/*24 - LISTADO DE INVESTIGACIONES POR DISCIPLINA O CONDICION TEMATICA*/
SELECT TI.idTemaInvestigacion, TI.idUsuario, TI.idNivelInvestigacion, TI.idTipoInvestigacion, TI.temaIncompleto, TI.tema, TI.situacionPreocupante, TI.conexionOtrosT
FROM TEMA_INVESTIGACION TI
    JOIN PROYECTO P
    ON p.idTemaInvestigacion = TI.idTemaInvestigacion
    JOIN PROYECTIVA PR
    ON P.idProyectiva = PR.idProyectiva
    JOIN EVENTO_PROYECTIVA EP
    ON EP.idProyectiva = PR.idProyectiva
    JOIN EVENTO E
    ON EP.idEvento = E.idEvento
    JOIN DISCIPLINA_EVENTO DE
    ON DE.idEvento = E.idEvento
    JOIN DISCIPLINA D
    ON DE.idDisciplina = D.idDisciplina
WHERE D.idDisciplina = 420

/*25 - FORMUALRIOS PARA LA CARGA DE CADA UNO DE LOS ELEMENTOS CONSTITUTIVOS DE UN PROYECTO*/


/*26 TABLA HOLOPRAXICA */
SELECT OE.preguntaEspecifica AS "PREGUNTA ESPECIFICA",OE.objetivo AS "OBJETIVO ESPECIFICO", E.estadio AS "ESTADIO", EV.evento AS "EVENTO", UE.descripcion AS "UNIDAD DE ESTUDIO", PO.poblacion AS "POBLACION", M.muestra AS "MUESTRA", TOI.tecnica AS "TECNICA", I.instrumento AS "INSTRUMENTO", TA.tecnica AS "TECNICA DE ANALISIS"
FROM PROYECTO P
    JOIN OBJETIVO_ESPECIFICO OE
    ON OE.idProyectiva = P.idProyectiva
    JOIN ESTADIO E
    ON E.idEstadio = OE.idEstadio
    JOIN UNIDAD_INFORMATIVA UI
    ON UI.idProyectiva = P.idProyectiva
    JOIN EVENTO EV
    ON EV.idEvento = UI.idEvento
    JOIN UNIDAD_ESTUDIO UE
    ON UE.idUnidadEstudio = P.idUnidadEstudio
    JOIN POBLACION PO
    ON PO.idPoblacion = UE.idPoblacion
    JOIN MUESTRA M
    ON M.idMuestra = UE.idMuestra
    JOIN TECNICA_OBTENCION_INFORMACION_U TOIU
    ON TOIU.idUnidadEstudio = UE.idUnidadEstudio
    JOIN TECNICA_OBTENCION_INFORMACION  TOI
    ON TOI.idTecnicaObtencionInformacion =TOIU.idTecnicaObtencionInformacion
    JOIN INSTRUMENTO I
    ON I.idEvento = EV.idEvento
    JOIN FUNDAMENTO_PROYECTIVO FP
    ON FP.idProyectiva = P.idProyectiva
    JOIN ANALISIS_EVENTO AE
    ON AE.idFundamentoProyectivo = FP.idFundamentoProyectivo
	JOIN TECNICA_ANALISIS TA
	ON AE.idTecnicaAnalisis = TA.idTecnicaAnalisis
WHERE P.idProyecto = 1

/*MODIFICAR EL CAMPO INICIAL CON LA PRIMERA LETRA DEL CAMPO ARGUMENTO*/
UPDATE NECESIDAD N
SET INICIAL
= (SELECT SUBSTR((SELECT ARGUMENTO
    FROM NECESIDAD a
    WHERE a.idNecesidad = N.idNecesidad),1,1))

