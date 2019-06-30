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


/*7 - LISTADO DE FICHAS POR LOS DIFERENTES TIPOS DE CATEGORIAS, TIPOLOGIAS E INFORMACION CONSTITUTIVA*/

/*8 - LISTADO DE FICHAS POR CONDICION DE USO EN EL PROYECTO*/

/*9 - LISTADO DE TIPOS DE INVESTIGACION Y SUS NIVELES*/

/*10 - LISTADO DE ARGUMENTOS DE LA JUSTIFICACION FILTRADO POR LOS DIFERENTES ELEMENTOS CONSTITUTIVOS*/
SELECT TI.tema, P.argumento  AS "potencialidad", O.argumento AS "oportunidad", N.argumento AS "necesidad", T.argumento AS "tendencia", CP.argumento AS "curiosidad y preocupacion", C.argumento AS "contradiccion", MI.argumento AS "Motivacion o interes"
FROM TEMA_INVESTIGACION TI
    JOIN POTENCIALIDAD P
    ON TI.idTemaInvestigacion = P.idTemaInvestigacion
    JOIN OPORTUNIDAD O
    ON TI.idTemaInvestigacion = O.idTemaInvestigacion
    JOIN NECESIDAD N
    ON TI.idTemaInvestigacion = N.idTemaInvestigacion
    JOIN TENDENCIA T
    ON TI.idTemaInvestigacion = T.idTemaInvestigacion
    JOIN CURIOSIDAD_PREOCUPACION CP
    ON TI.idTemaInvestigacion = CP.idTemaInvestigacion
    JOIN CONTRADICCION C
    ON TI.idTemaInvestigacion = C.idTemaInvestigacion
    JOIN MOTIVACION_INTERES MI
    ON TI.idTemaInvestigacion = MI.idTemaInvestigacion;

/*11 - INSTRUMENTO POR EVENTO*/

/*12 - ESQUELETO DEL INFORME DEL PROYECTO*/

/*13 - REPORTE DE CALIDAD DEL PROYECTO DE ACUERDO A LAS MATRICES PROPUESTAS POR HERNANDEZ Y BAPTISTA*/

/*14 - HISTORIAL DE MODIFICACIOES DEL PROYECTO*/

/*15 - LISTA INSTITUCIONES DE INVESTIGACION*/
SELECT U.nombre FROM USUARIO U
JOIN ROL_USUARIO RU
ON U.idUsuario = RU.idUsuario
JOIN ROL R
ON R.idRol = RU.idRol
WHERE R.idRol = 75

/*16 - LISTADO DE CONTEXTOS ATENDIDOS*/
SELECT * FROM CONTEXTO

/*17 - LISTADO DE PROYECTOS ABORDADOS FILTRADO POR LOS DIFERENTES ELEMENTOS CONSTITUTIVOS*/

/*18 - LISTADO DE TIPOS DE EVENTOS (clase de enventos)*/
SELECT C.clase
FROM CLASE_EVENTO C;

/*19 - LISTADO DE TIPOS DE UNIDADES INFORMACION*/

/*20 - LISTADO DE NIVELES DE LOS NIVELES DE LA FUNDAMENTACION POSIBLES*/
/*TODOS LOS NIVELES*/
SELECT FP.idFundamentoProyectivo, D.definicion, D.explicacion, A.analisis, C.comparacion, E.explicacion, P.prediccion
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

/*22 - LISTADO DE TIPOS DE TECNICAS POSIBLES DE RECOLECCION DE INFORMACION*/
SELECT tecnica
FROM TECNICA_OBTENCION_INFORMACION

/*23 - LISTADO DE TIPOS DE TECNICAS POSIBLES DE ANALISIS*/
SELECT tecnica
FROM TECNICA_ANALISIS 

/*24 - LISTADO DE INVESTIGACIONES POR DISCIPLINA O CONDICION TEMATICA*/
SELECT * 
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
WHERE D.disciplina = 420

/*25 - FORMUALRIOS PARA LA CARGA DE CADA UNO DE LOS ELEMENTOS CONSTITUTIVOS DE UN PROYECTO*/
