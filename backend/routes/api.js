
const { Router } = require('express');
const router = Router();


// ----------------- CONTROLLERS ENTIDADES  -------------------- 
const { getUsers, getUserById, createUser, updateUser, deleteUser, getUserByCorreo, getUsersAndRoles } = require('../service/entidades/usuarioService.js');
const { getProyectivas, getProyectivaById, createProyectiva, updateProyectiva, deleteProyectiva } = require('../service/entidades/proyectivaService.js');
const { getUnidadById, getUnidadEstudio, createUnidadEstudio, updateUnidaEstudio, deleteUnidadEstudio} = require('../service/entidades/unidadEstudioService.js');
const { getAbordaje, getAbordajeById, createAbordaje, updateAbordaje, deleteAbordaje } =  require('../service/entidades/abordajeService.js');
const { getContextos, getContextoById, createContexto, updateContexto, deleteContexto } =  require('../service/entidades/contextoService.js');
const { getEventos, getEventoById, createEvento, updateEvento, deleteEvento } = require('../service/entidades/eventoService.js');
const { getFundamentos, getFundamentoById, createFundamento, updateFundamento, deleteFundamento} = require('../service/entidades/fundamentoProyectivoService.js');
const { getJustificacion, getJustificacionById, createJustificacion, updateJustificacion, deleteJustificacion } = require('../service/entidades/justificacionService.js');
const { getAnalisisEventoById, createAnalisisEvento, updateAnalisisEvento, deleteAnalisisEvento } = require('../service/entidades/analisisEventoService');
const { getAspectoLegalById, createAspectoLegal, updateAspectoLegal, deleteAspectoLegal } = require('../service/entidades/aspectoLegalService');
const { getCategoriaById, createCategoria, updateCategoria, deleteCategoria } = require('../service/entidades/categoriaService');
const { getCategoriaUnidadInformativaById, createCategoriaUnidadInformativa, updateCategoriaUnidadInformativa, deleteCategoriaUnidadInformativa } = require('../service/entidades/categoriaUnidadInformativa');
const { getClaseEventoById, createClaseEvento, updateClaseEvento, deleteClaseEvento } = require('../service/entidades/claseEventoService');
const { getComparacionById, createComparacion, updateComparacion, deleteComparacion } = require('../service/entidades/comparacionService');
const { getCondicionMetodologicaById, createCondicionMetodologica, updateCondicionMetodologica, deleteCondicionMetodologica } = require('../service/entidades/condicionMetodologicaService');
const { getCondicionPersonalById, createCondicionPersonal, updateCondicionPersonal, deleteCondicionPersonal} = require('../service/entidades/condicionPersonalService');
const { getCondicionSocialById, createCondicionSocial, updateCondicionSocial, deleteCondicionSocial } = require('../service/entidades/condicionSocialService');
const { getConsecuenciaById, createConsecuencia, updateConsecuencia, deleteConsecuencia } = require('../service/entidades/consecuenciaService');
const { getConsecuenciaTemaById, createConsecuenciaTema, updateConsecuenciaTema, deleteConsecuenciaTema } = require('../service/entidades/consecuenciaTemaInvestigacionService');
const { getIndicioById, createIndicio, updateIndicio, deleteIndicio } = require('../service/entidades/indicioService');
const { getContextoUnidadEstudioById, createContextoUnidadEstudio, updateContextoUnidadEstudio, deleteContextoUnidadEstudio } = require('../service/entidades/contextoUnidadEstudioService');
const { getContradiccionById, createContradiccion, updateContradiccion, deleteContradiccion } = require('../service/entidades/contradiccionService');
const { getCuriosidadById, createCuriosidad, updateCuriosidad, deleteCuriosidad } = require('../service/entidades/curiosidadPreocupacion');
const { getDescripcionEventoById, createDescripcionEvento, updateDescripcionEvento, deleteDescripcionEvento } = require('../service/entidades/descripcionEventoService');
const { getDiferenciaById, createDiferencia, updateDiferencia, deleteDiferencia } = require('../service/entidades/diferenciaService');
const { getDisciplinaEventoById, createDisciplinaEvento, updateDisciplinaEvento, deleteDisciplinaEvento } = require('../service/entidades/disciplinaEventoService');
const { getDisciplinaById, createDisciplina, updateDisciplina, deleteDisciplina } = require('../service/entidades/disciplinaService');
const { getDisenoInvestigacionById, createDisenoInvestigacion, updateDisenoInvestigacion, deleteDisenoInvestigacion } = require('../service/entidades/disenoInvestigacionService');
const { getEfectoLograrById, createEfectoLograr, updateEfectoLograr, deleteEfectoLograr } = require('../service/entidades/efectoLograrService');
const { getEstadioById, createEstadio, updateEstadio, deleteEstadio } = require('../service/entidades/estadioService');
const { getEstructuracionPreviaById, createEstructuracionPrevia, updateEstructuracionPrevia, deleteEstructuracionPrevia } = require('../service/entidades/estructuracionPrevia');
const { getEventoProyectivaById, createEventoProyectiva, updateEventoProyectiva, deleteEventoProyectiva } = require('../service/entidades/eventoProyectivaService');
const { getExplicacionById, createExplicacion, updateExplicacion, deleteExplicacion } = require('../service/entidades/explicacionService');
const { getFuenteById, createFuente, updateFuente, deleteFuente } = require('../service/entidades/fuenteService');
const { getFundamentoProyectivoAspectoById, createFundamentoProyectivoAspecto, updateFundamentoProyectivoAspecto, deleteFundamentoProyectivoAspecto } = require('../service/entidades/fundamentoProyectivoAspectoLegalService');
const { getFundamentoProyectivoInvestigacionById, createFundamentoProyectivoInvestigacion, updateFundamentoProyectivoInvestigacion, deleteFundamentoProyectivoInvestigacion } = require('../service/entidades/fundamentoProyectivoInvestigacionService');
const { getGradoParticipacionById, createGradoParticipacion, updateGradoParticipacion, deleteGradoParticipacion } = require('../service/entidades/gradoParticipacionService');
const { getInstrumentoById, createInstrumento, updateInstrumento, deleteInstrumento } = require('../service/entidades/instrumentoService');
const { getInvolucradoById, createInvolucrado, updateInvolucrado, deleteInvolucrado } = require('../service/entidades/involucradoService');
const { getInvolucradoTemaIById, createInvolucradoTemaI, updateInvolucradoTemaI, deleteInvolucradoTemaI } = require('../service/entidades/involucradoTemaInvestigacion');
const { getItemById, createItem, updateItem, deleteItem } = require('../service/entidades/itemService');
const { getMotivacionById, createMotivacion, updateMotivacion, deleteMotivacion } = require('../service/entidades/motivacionInteresService');
const { getMuestraById, createMuestra, updateMuestra, deleteMuestra } = require('../service/entidades/muestraService');
const { getNecesidadById, createNecesidad, updateNecesidad, deleteNecesidad } = require('../service/entidades/necesidadService');
const { getNivelInvestigacionById, createNivelInvestigacion, updateNivelInvestigacion, deleteNivelInvestigacion } = require('../service/entidades/nivelInvestigacionService');
const { getObjetivoEspecificoById, createObjetivoEspecifico, updateObjetivoEspecifico, deleteObjetivoEspecifico } = require('../service/entidades/objetivoEspecificoService');
const { getObjetivoGeneralById, createObjetivoGeneral, updateObjetivoGeneral, deleteObjetivoGeneral } = require('../service/entidades/objetivoGeneralService');
const { getOportunidadById, createOportunidad, updateOportunidad, deleteOportunidad } = require('../service/entidades/oportunidadService');
const { getPerspectivaInterpretacionById, createPerspectivaInterpretacion, updatePerspectivaInterpretacion, deletePerspectivaInterpretacion } = require('../service/entidades/perspectivaInterpretacionService');
const { getPoblacionById, createPoblacion, updatePoblacion, deletePoblacion } = require('../service/entidades/poblacionService');
const { getPotencialidadById, createPotencialidad, updatePotencialidad, deletePotencialidad } = require('../service/entidades/potencialidadService');
const { getPrediccionById, createPrediccion, updatePrediccion, deletePrediccion } = require('../service/entidades/prediccionService');
const { getProcesoExplicativoById, createProcesoExplicativo, updateProcesoExplicativo, deleteProcesoExplicativo } = require('../service/entidades/procesoExplicativoService');
const { getProyectoById, createProyecto, updateProyecto, deleteProyecto } = require('../service/entidades/proyectoService');
const { getRolById, createRol, updateRol, deleteRol } = require('../service/entidades/rolService');
const { getRolUsuarioById, createRolUsuario, updateRolUsuario, deleteRolUsuario } = require('../service/entidades/rolUsuarioService');
const { getSemejanzaCategoriaById , createSemejanzaCategoria, updateSemejanzaCategoria, deleteSemejanzaCategoria } = require('../service/entidades/semejanzaCategoriaService');
const { getSinergiaById, createSinergia, updateSinergia, deleteSinergia } = require('../service/entidades/sinergiaService');
const { getTecnicaAnalisisById, createTecnicaAnalisis, updateTecnicaAnalisis, deleteTecnicaAnalisis } = require('../service/entidades/tecnicaAnalisisService');
const { getTecnicaObtencionInformacionById, createTecnicaObtencionInformacion, updateTecnicaObtencionInformacion, deleteTecnicaObtencionInformacion } = require('../service/entidades/tecnicaObtencionInformacionService');
const { getTecnicaObtencionInformacionUById, createTecnicaObtencionInformacionU, updateTecnicaObtencionInformacionU, deleteTecnicaObtencionInformacionU } = require('../service/entidades/tecnicaObtencionInformacionUService');
const { getTemaInvestigacionById, createTemaInvestigacion, updateTemaInvestigacion, deleteTemaInvestigacion } = require('../service/entidades/temaInvestigacionService');
const { getTemporalidadMedicionById, createTemporalidadMedicion, updateTemporalidadMedicion, deleteTemporalidadMedicion } = require('../service/entidades/temporalidadMedicion');
const { getTemporalidadMedicionContextoById , createTemporalidadMedicionContexto, updateTemporalidadMedicionContexto, deleteTemporalidadMedicionContexto } = require('../service/entidades/temporalidadMedicionContextoService');
const { getTendenciaById, createTendencia, updateTendencia, deleteTendencia } = require('../service/entidades/tendenciaService');
const { getTipoInvestigacionById, createTipoInvestigacion, deleteTipoInvestigacion, updateTipoInvestigacion } = require('../service/entidades/tipoInvestigacionService');
const { getUnidadInformativaById, createUnidadInformativa, updateUnidadInformativa, deleteUnidadInformativa } = require('../service/entidades/unidadInformativaService');
const { getVersionById, createVersion, updateVersion, deleteVersion } = require('../service/entidades/versionService');


// ----------------- CONTROLLERS CONSULTAS -------------------- 
const { getTablaEspecificaciones, getTablaOperacionalizacion, getTablaHolopraxica, getTablaArgumentosJustificacion, getTablaPoblacionMuestra } = require('../service/consultas/tablasService');
const { getListadoFichasCategoria, getListadoFichasCondicion, getListadoTiposUnidadesInformacion, getListadoArgumentosByContexto, getListadoArgumentosByEvento, getListadoArgumentosByTemporalidad, getListadoArgumentosByTipoInvestigacion, getListadoArgumentosByUnidadEstudio, getListadoContextosAtendidos, getListadoInvestigacionesDisciplina, getListadoModalidadesProyectiva, getListadoNivelesFundamentacionAllLevels, getListadoNivelesFundamentacionAnalitico, getListadoNivelesFundamentacionComparativo, getListadoNivelesFundamentacionDescriptivo, getListadoNivelesFundamentacionExplicativo, getListadoNivelesFundamentacionPredictivo, getListadoProyectosByContexto, getListadoProyectosByEvento, getListadoProyectosByMuestra, getListadoProyectosByNivelInvestigacion, getListadoProyectosByPoblacion, getListadoProyectosByTemporalidad, getListadoProyectosByTipoInvestigacion, getListadoTiposEventos, getListadoTiposInvestigacionNiveles, getListadoTiposTecnicasAnalisis, getListadoTiposTecnicasRecoleccion } = require('../service/consultas/listadosService');
const { getInstrumentoEvento } = require('../service/consultas/InstrumentoEventoService');
const { getEsqueletoProyectoByTemaInvestigacion } = require('../service/consultas/esqueletoProyectoService');
const { getFormulariosCarga } = require('../service/consultas/formulariosElementosConstitutivosService');
const { getHistorialModificacionesByTemaInvestigacion} = require('../service/consultas/historialModificacionesService');
const { getHologramaInvestigacion } = require('../service/consultas/hologramaInvestigacionService');
const { getListaInstitucionesInvestigacionByRol} = require('../service/consultas/listaInstitucionesInvestigacionService');
const {} = require('../service/consultas/reportesCalidadService');

// ****************************** ROUTES ***************************************

// ------------------------- Usuario ---------------------------
router.get('/usuarios', getUsers);
router.get('/usuarios/roles', getUsersAndRoles);
router.get('/usuarios/:id', getUserById);
router.post('/usuarios', createUser);
router.put('/usuarios/:id', updateUser);
router.put('/usuarios/:id/disable', deleteUser);
router.get('/usuarios/:correo/correo', getUserByCorreo);

// -------------------------- Proyectiva ----------------------------- 
router.get('/proyectivas', getProyectivas);
router.get('/proyectivas/:id', getProyectivaById);
router.post('/proyectivas', createProyectiva);
router.put('/proyectivas/:id', updateProyectiva);
router.put('/proyectivas/:id/disable', deleteProyectiva);


// -------------------------- Unidad de Estudio -------------------- 
router.get('/unidadEstudios', getUnidadEstudio);
router.get('/unidadEstudios/:id', getUnidadById);
router.post('/unidadEstudios', createUnidadEstudio);
router.put('/unidadEstudios/:id', updateUnidaEstudio);
router.put('/unidadEstudios/:id/disable', deleteUnidadEstudio);

// -------------------------- Abordaje ----------------------------- 
router.get('/abordajes',getAbordaje);
router.get('/abordajes/:id', getAbordajeById);
router.post('/abordajes', createAbordaje);
router.put('/abordajes/:id', updateAbordaje);
router.put('/abordajes/:id/disable', deleteAbordaje);

// --------------------------- Contexto  -------------------------------
router.get('/contextos', getContextos);
router.get('/contextos/:id', getContextoById);
router.post('/contextos', createContexto);
router.put('/contextos/:id', updateContexto);
router.put('/contextos/:id/disable', deleteContexto);



// ----------------------- Evento ------------------------------------------- 
router.get('/eventos', getEventos);
router.get('/eventos/:id', getEventoById);
router.post('/eventos', createEvento);
router.put('/eventos/:id', updateEvento);
router.put('/eventos/:id/disable', deleteEvento);

// ----------------------- Fundamento Proyectivo ------------------------- 
router.get('/fundamentos',getFundamentos );
router.get('/fundamentos/:id', getFundamentoById);
router.post('/fundamentos', createFundamento);
router.put('/fundamentos/:id', updateFundamento);
router.put('/fundamentos/:id/disable', deleteFundamento);

// ----------------------- Justificacion --------------------------------- 
router.get('/justificaciones',getJustificacion );
router.get('/justificaciones/:id', getJustificacionById);
router.post('/justificaciones', createJustificacion);
router.put('/justificaciones/:id', updateJustificacion);
router.put('/justificaciones/:id/disable', deleteJustificacion);

// ------------------------ Analisis Evento -------------------------------------------
router.get('/analisis/:id', getAnalisisEventoById );
router.post('/analisis', createAnalisisEvento);
router.put('/analisis/:id', updateAnalisisEvento);
router.put('/analisis/:id/disable', deleteAnalisisEvento);


// ------------------------ Aspecto Legal ----------------------------------------
router.get('/aspectos/:id', getAspectoLegalById );
router.post('/aspectos', createAspectoLegal);
router.put('/aspectos/:id', updateAspectoLegal );
router.put('/aspectos/:id/disable', deleteAspectoLegal);

// ------------------------ Categoria  ----------------------------------------
router.get('/categorias/:id', getCategoriaById);
router.post('/categorias', createCategoria );
router.put('/categorias/:id', updateCategoria);
router.put('/categorias/:id/disable', deleteCategoria);


// ------------------------ Categoria Unidad Informativa  ----------------------------------------
router.get('/categoriasUnidades/:id',getCategoriaUnidadInformativaById );
router.post('/categoriasUnidades',createCategoriaUnidadInformativa );
router.put('/categoriasUnidades/:id', updateCategoriaUnidadInformativa);
router.put('/categoriasUnidades/:id/disable', deleteCategoriaUnidadInformativa);

// ------------------------ Clase Evento ----------------------------------------
router.get('/clases/:id',getClaseEventoById );
router.post('/clases', createClaseEvento );
router.put('/clases/:id', updateClaseEvento );
router.put('/clases/:id/disable', deleteClaseEvento);


// ------------------------ Comparacion ----------------------------------------
router.get('/comparaciones/:id', getComparacionById);
router.post('/comparaciones', createComparacion );
router.put('/comparaciones/:id', updateComparacion);
router.put('/comparaciones/:id/disable', deleteComparacion);



// ------------------------ Condicion Metodologica ----------------------------------------
router.get('/condicionesMetodologicas/:id',getCondicionMetodologicaById );
router.post('/condicionesMetodologicas', createCondicionMetodologica );
router.put('/condicionesMetodologicas/:id', updateCondicionMetodologica);
router.put('/condicionesMetodologicas/:id/disable', deleteCondicionMetodologica);


// ------------------------ Condicion Personal  ----------------------------------------
router.get('/condicionesPersonales/:id', getCondicionPersonalById);
router.post('/condicionesPersonales',createCondicionPersonal );
router.put('/condicionesPersonales/:id', updateCondicionPersonal);
router.put('/condicionesPersonales/:id/disable', deleteCondicionPersonal);

// ------------------------ Condicion Social  ----------------------------------------
router.get('/condicionesSociales/:id',getCondicionSocialById );
router.post('/condicionesSociales',createCondicionSocial );
router.put('/condicionesSociales/:id',updateCondicionSocial );
router.put('/condicionesSociales/:id/disable', deleteCondicionSocial);


// ------------------------ Consecuencia ----------------------------------------
router.get('/consecuencias/:id', getConsecuenciaById );
router.post('/consecuencias', createConsecuencia);
router.put('/consecuencias/:id', updateConsecuencia);
router.put('/consecuencias/:id/disable', deleteConsecuencia );



// ------------------------ Consecuencia Tema ----------------------------------------
router.get('/consecuenciasTemas/:id',getConsecuenciaTemaById );
router.post('/consecuenciasTemas',createConsecuenciaTema );
router.put('/consecuenciasTemas/:id',updateConsecuenciaTema );
router.put('/consecuenciasTemas/:id/disable',deleteConsecuenciaTema );


// ------------------------ Indicio ----------------------------------------
router.get('/indicios/:id', getIndicioById);
router.post('/indicios', createIndicio );
router.put('/indicios/:id',updateIndicio);
router.put('/indicios/:id/disable', deleteIndicio);




// ------------------------ Contexto Unidad Estudio ----------------------------------------
router.get('/contextosUnidades/:id', getContextoUnidadEstudioById);
router.post('/contextosUnidades', createContextoUnidadEstudio);
router.put('/contextosUnidades/:id', updateContextoUnidadEstudio);
router.put('/contextosUnidades/:id/disable', deleteContextoUnidadEstudio );





// ------------------------ Contradiccion ----------------------------------------
router.get('/contradicciones/:id', getContradiccionById );
router.post('/contradicciones',createContradiccion );
router.put('/contradicciones/:id', updateContradiccion);
router.put('/contradicciones/:id/disable', deleteContradiccion);



// ------------------------ Curiosidad ----------------------------------------
router.get('/curiosidades/:id', getCuriosidadById);
router.post('/curiosidades', createCuriosidad);
router.put('/curiosidades/:id',updateCuriosidad );
router.put('/curiosidades/:id/disable', deleteCuriosidad);


// ------------------------ Descripcion Evento ----------------------------------------
router.get('/descripcionEventos/:id', getDescripcionEventoById);
router.post('/descripcionEventos', createDescripcionEvento );
router.put('/descripcionEventos/:id',updateDescripcionEvento );
router.put('/descripcionEventos/:id/disable', deleteDescripcionEvento);



// ------------------------ Diferencia ----------------------------------------
router.get('/diferencias/:id', getDiferenciaById);
router.post('/diferencias',createDiferencia );
router.put('/diferencias/:id', updateDiferencia);
router.put('/diferencias/:id/disable', deleteDiferencia );


// ------------------------ Disciplina Evento ----------------------------------------
router.get('/disciplinasEvento/:id', getDisciplinaEventoById);
router.post('/disciplinasEvento', createDisciplinaEvento);
router.put('/disciplinasEvento/:id', updateDisciplinaEvento);
router.put('/disciplinasEvento/:id/disable', deleteDisciplinaEvento);



// ------------------------ Disciplina ----------------------------------------
router.get('/disciplinas/:id', getDisciplinaById );
router.post('/disciplinas', createDisciplina );
router.put('/disciplinas/:id', updateDisciplina);
router.put('/disciplinas/:id/disable', deleteDisciplina);



// ------------------------ Diseno Investigacion ----------------------------------------
router.get('/disenosInvestigacion/:id',getDisenoInvestigacionById );
router.post('/disenosInvestigacion', createDisenoInvestigacion);
router.put('/disenosInvestigacion/:id', updateDisenoInvestigacion);
router.put('/disenosInvestigacion/:id/disable',deleteDisenoInvestigacion);



// ------------------------ Efecto a Lograr ----------------------------------------
router.get('/efectosLograr/:id',getEfectoLograrById );
router.post('/efectosLograr', createEfectoLograr );
router.put('/efectosLograr/:id', updateEfectoLograr);
router.put('/efectosLograr/:id/disable', deleteEfectoLograr );


// ------------------------ Estadio  ----------------------------------------
router.get('/estadios/:id',getEstadioById );
router.post('/estadios',createEstadio );
router.put('/estadios/:id', updateEstadio);
router.put('/estadios/:id/disable', deleteEstadio);


// ------------------------ Estructuracion Previa ----------------------------------------
router.get('/estructuracionesPrevias/:id',getEstructuracionPreviaById );
router.post('/estructuracionesPrevias', createEstructuracionPrevia);
router.put('/estructuracionesPrevias/:id',updateEstructuracionPrevia );
router.put('/estructuracionesPrevias/:id/disable', deleteEstructuracionPrevia);


// ------------------------ Evento Proyectiva ----------------------------------------
router.get('/eventosProyectiva/:id',getEventoProyectivaById );
router.post('/eventosProyectiva',createEventoProyectiva );
router.put('/eventosProyectiva/:id', updateEventoProyectiva);
router.put('/eventosProyectiva/:id/disable',deleteEventoProyectiva );



// ------------------------ Explicacion ----------------------------------------
router.get('/explicaciones/:id', getExplicacionById);
router.post('/explicaciones', createExplicacion);
router.put('/explicaciones/:id',updateExplicacion );
router.put('/explicaciones/:id/disable',deleteExplicacion );



// ------------------------ Fuente ----------------------------------------
router.get('/fuentes/:id',getFuenteById );
router.post('/fuentes', createFuente);
router.put('/fuentes/:id', updateFuente);
router.put('/fuentes/:id/disable', deleteFuente);


// ------------------------ Fundamento Proyectivo Aspecto Legal ----------------------------------------
router.get('/fundamentoProyectivoAspectoLegal/:id',getFundamentoProyectivoAspectoById );
router.post('/fundamentoProyectivoAspectoLegal',createFundamentoProyectivoAspecto );
router.put('/fundamentoProyectivoAspectoLegal/:id', updateFundamentoProyectivoAspecto);
router.put('/fundamentoProyectivoAspectoLegal/:id/disable',deleteFundamentoProyectivoAspecto );



// ------------------------ Fundamento Proyectivo Investigacion ----------------------------------------
router.get('/fundamentoProyectivoInvestigacion/:id', getFundamentoProyectivoInvestigacionById);
router.post('/fundamentoProyectivoInvestigacion', createFundamentoProyectivoInvestigacion);
router.put('/fundamentoProyectivoInvestigacion/:id', updateFundamentoProyectivoInvestigacion);
router.put('/fundamentoProyectivoInvestigacion/:id/disable', deleteFundamentoProyectivoInvestigacion);


// ------------------------ Grado Participacion ----------------------------------------
router.get('/gradoParticipaciones/:id',getGradoParticipacionById );
router.post('/gradoParticipaciones', createGradoParticipacion);
router.put('/gradoParticipaciones/:id',updateGradoParticipacion );
router.put('/gradoParticipaciones/:id/disable',deleteGradoParticipacion );



// ------------------------ Instrumento ----------------------------------------
router.get('/instrumentos/:id', getInstrumentoById);
router.post('/instrumentos',createInstrumento );
router.put('/instrumentos/:id', updateInstrumento);
router.put('/instrumentos/:id/disable', deleteInstrumento);


// ------------------------ Involucrado ----------------------------------------
router.get('/involucrados/:id', getInvolucradoById);
router.post('/involucrados', createInvolucrado);
router.put('/involucrados/:id',updateInvolucrado );
router.put('/involucrados/:id/disable',deleteInvolucrado );


// ------------------------ Involucrado Tema Investigacion  ----------------------------------------
router.get('/involucradosTemaInvestigacion/:id', getInvolucradoTemaIById);
router.post('/involucradosTemaInvestigacion',createInvolucradoTemaI );
router.put('/involucradosTemaInvestigacion/:id',updateInvolucradoTemaI );
router.put('/involucradosTemaInvestigacion/:id/disable', deleteInvolucradoTemaI);



// ------------------------ Item ----------------------------------------
router.get('/items/:id',getItemById );
router.post('/items',createItem );
router.post('/items/:id', updateItem);
router.put('/items/:id/disable', deleteItem);


// ------------------------ Motivacion ----------------------------------------

router.get('/motivaciones/:id', getMotivacionById);
router.put('/motivaciones', createMotivacion);
router.put('/motivaciones/:id',updateMotivacion );
router.put('/motivaciones/:id/disable',deleteMotivacion );

// ------------------------ Muestra ----------------------------------------
router.get('/muestras/:id',getMuestraById );
router.post('/muestras',createMuestra );
router.put('/muestras/:id',updateMuestra );
router.put('/muestras/:id/disable',deleteMuestra );


// ------------------------ Necesidad  ----------------------------------------
router.get('/necesidades/:id',getNecesidadById );
router.post('/necesidades',createNecesidad );
router.put('/necesidades/:id',updateNecesidad );
router.put('/necesidades/:id/disable', deleteNecesidad);


// ------------------------ Nivel Investigacion ----------------------------------------
router.get('/nivelesInvestigacion/:id',getNivelInvestigacionById );
router.post('/nivelesInvestigacion',createNivelInvestigacion );
router.put('/nivelesInvestigacion/:id', updateNivelInvestigacion);
router.put('/nivelesInvestigacion/:id/disable',deleteNivelInvestigacion );



// ------------------------ Objetivo Especifico ----------------------------------------
router.get('/objetivosEspecificos/:id',getObjetivoEspecificoById );
router.post('/objetivosEspecificos',createObjetivoEspecifico );
router.put('/objetivosEspecificos/:id', updateObjetivoEspecifico);
router.put('/objetivosEspecificos/:id/disable',deleteObjetivoEspecifico );


// ------------------------ Objetivo General ----------------------------------------
router.get('/objetivosGenerales/:id', getObjetivoGeneralById);
router.post('/objetivosGenerales', createObjetivoGeneral);
router.put('/objetivosGenerales/:id', updateObjetivoGeneral);
router.put('/objetivosGenerales/:id/disable', deleteObjetivoGeneral);


// ------------------------ Oportunidad ----------------------------------------
router.get('/oportunidades/:id', getOportunidadById);
router.post('/oportunidades',createOportunidad);
router.put('/oportunidades/:id', updateOportunidad);
router.put('/oportunidades/:id/disable',deleteOportunidad );



// ------------------------ Perspectiva Interpretacion ----------------------------------------
router.get('/perspectivasInterpretacion/:id',getPerspectivaInterpretacionById );
router.post('/perspectivasInterpretacion',createPerspectivaInterpretacion );
router.put('/perspectivasInterpretacion/:id', updatePerspectivaInterpretacion);
router.put('/perspectivasInterpretacion/:id/disable',deletePerspectivaInterpretacion );



// ------------------------ Poblacion ----------------------------------------
router.get('/poblaciones/:id',getPoblacionById );
router.post('/poblaciones', createPoblacion);
router.put('/poblaciones/:id',updatePoblacion );
router.put('/poblaciones/:id/disable', deletePoblacion);


// ------------------------ Potencialidad ----------------------------------------
router.get('/potencialidades/:id', getPotencialidadById);
router.post('/potencialidades', createPotencialidad);
router.put('/potencialidades/:id',updatePotencialidad );
router.put('/potencialidades/:id/disable', deletePotencialidad);



// ------------------------ Prediccion ----------------------------------------
router.get('/predicciones/:id',getPrediccionById );
router.post('/predicciones', createPrediccion);
router.put('/predicciones/:id',updatePrediccion );
router.put('/predicciones/:id/disable', deletePrediccion);


// ------------------------ Proceso Explicativo ----------------------------------------
router.get('/procesosExplicativos/:id',getProcesoExplicativoById );
router.post('/procesosExplicativos', createProcesoExplicativo);
router.put('/procesosExplicativos/:id',updateProcesoExplicativo );
router.put('/procesosExplicativos/:id/disable',deleteProcesoExplicativo );



// ------------------------ Proyecto ----------------------------------------
router.get('/proyectos/:id', getProyectoById);
router.post('/proyectos', createProyecto);
router.put('/proyectos/:id',updateProyecto );
router.put('/proyectos/:id/disable', deleteProyecto);


// ------------------------ Rol ----------------------------------------
router.get('/roles/:id', getRolById);
router.post('/roles', createRol);
router.put('/roles/:id',updateRol );
router.put('/roles/:id/disable', deleteRol);


// ------------------------ Rol Usuario ----------------------------------------
router.get('/rolesUsuarios/:id', getRolUsuarioById);
router.post('/rolesUsuarios',createRolUsuario );
router.put('/rolesUsuarios/:id',updateRolUsuario );
router.put('/rolesUsuarios/:id/disable', deleteRolUsuario);


// ------------------------ Semejanza Categoria ----------------------------------------
router.get('/semejanzasCategoria/:id', getSemejanzaCategoriaById);
router.post('/semejanzasCategoria',createSemejanzaCategoria );
router.put('/semejanzasCategoria/:id',updateSemejanzaCategoria );
router.put('/semejanzasCategoria/:id/disable',deleteSemejanzaCategoria );

// ------------------------ Sinergia ----------------------------------------
router.get('/sinergias/:id', getSinergiaById);
router.post('/sinergias', createSinergia);
router.put('/sinergias/:id',updateSinergia );
router.put('/sinergias/:id/disable',deleteSinergia );


// ------------------------ Tecnica Analisis ----------------------------------------
router.get('/tecnicasAnalisis/:id', getTecnicaAnalisisById);
router.post('/tecnicasAnalisis', createTecnicaAnalisis);
router.put('/tecnicasAnalisis/:id',updateTecnicaAnalisis );
router.put('/tecnicasAnalisis/:id/disable',deleteTecnicaAnalisis);


// ------------------------ Tecnica Obtencion Informacion ----------------------------------------
router.get('/tecnicasObtencionInformacion/:id', getTecnicaObtencionInformacionById);
router.post('/tecnicasObtencionInformacion',createTecnicaObtencionInformacion );
router.put('/tecnicasObtencionInformacion/:id', updateTecnicaObtencionInformacion);
router.put('/tecnicasObtencionInformacion/:id/disable',deleteTecnicaObtencionInformacion );



// ------------------------ Tecnica Obtencion Informacion U ----------------------------------------
router.get('/tecnicasObtencionInformacionU/:id', getTecnicaObtencionInformacionUById);
router.post('/tecnicasObtencionInformacionU',createTecnicaObtencionInformacionU);
router.put('/tecnicasObtencionInformacionU/:id',updateTecnicaObtencionInformacionU);
router.put('/tecnicasObtencionInformacionU/:id/disable',deleteTecnicaObtencionInformacionU );


// ------------------------ Tema Investigacion  ----------------------------------------
router.get('/temasInvestigacion/:id',getTemaInvestigacionById );
router.post('/temasInvestigacion',createTemaInvestigacion );
router.put('/temasInvestigacion/:id',updateTemaInvestigacion );
router.put('/temasInvestigacion/:id/disable',deleteTemaInvestigacion );



// ------------------------ Temporalidad Medicion ----------------------------------------
router.get('/temporalidadesMedicion/:id', getTemporalidadMedicionById);
router.post('/temporalidadesMedicion', createTemporalidadMedicion);
router.put('/temporalidadesMedicion/:id', updateTemporalidadMedicion);
router.put('/temporalidadesMedicion/:id/disable',deleteTemporalidadMedicion );


// ------------------------ Temporadlidad Medicion Contexto ----------------------------------------
router.get('/temporalidadesMedicionContexto/:id', getTemporalidadMedicionContextoById);
router.post('/temporalidadesMedicionContexto',createTemporalidadMedicionContexto );
router.put('/temporalidadesMedicionContexto/:id',updateTemporalidadMedicionContexto );
router.put('/temporalidadesMedicionContexto/:id/disable',deleteTemporalidadMedicionContexto );


// ------------------------ Tendencia ----------------------------------------
router.get('/tendencias/:id', getTendenciaById);
router.post('/tendencias', createTendencia);
router.put('/tendencias/:id',updateTendencia );
router.put('/tendencias/:id/disable',deleteTendencia );


// ------------------------ Tipo Invesstigacion  ----------------------------------------
router.get('/tiposInvestigacion/:id', getTipoInvestigacionById);
router.post('/tiposInvestigacion', createTipoInvestigacion);
router.put('/tiposInvestigacion/:id',updateTipoInvestigacion );
router.put('/tiposInvestigacion/:id/disable', deleteTipoInvestigacion);

// ------------------------ Unidad Informativa ----------------------------------------
router.get('/unidadesInformativas/:id',getUnidadInformativaById );
router.post('/unidadesInformativas',createUnidadInformativa );
router.put('/unidadesInformativas/:id',updateUnidadInformativa );
router.put('/unidadesInformativas/:id/disable',deleteUnidadInformativa );


// ------------------------ Version ----------------------------------------
router.get('/versiones/:id', getVersionById);
router.post('/versiones', createVersion);
router.put('/versiones/:id', updateVersion);
router.put('/versiones/:id/disable',deleteVersion );


// ------------------------------- Tablas ---------------------------------------------

router.get('/tablas/holopraxica', getTablaHolopraxica);
router.get('/tablas/poblacionMuestra', getTablaPoblacionMuestra);
router.get('/tablas/argumentosJustificacion', getTablaArgumentosJustificacion);
router.get('/tablas/especificaciones', getTablaEspecificaciones); 
router.get('/tablas/operacionalizacion', getTablaOperacionalizacion);


// ------------------------------- Listados ---------------------------------------------------- 
// --------------- Argumentos 
router.get('/listados/argumentos/byTemporalidad/:idTemporalidad',getListadoArgumentosByTemporalidad);
router.get('/listados/argumentos/byContexto/:idContexto',getListadoArgumentosByContexto);
router.get('/listados/argumentos/byUnidadEstudio/:idUnidadEstudio', getListadoArgumentosByUnidadEstudio);
router.get('/listados/argumentos/byEvento/:idEvento', getListadoArgumentosByEvento);
router.get('/listados/argumentos/byTipoInvestigacion/:idTipoInvestigacion', getListadoArgumentosByTipoInvestigacion);

// --------------- Proyectos
router.get('/listados/proyectos/contexto', getListadoProyectosByContexto);
router.get('/listados/proyectos/temporalidad', getListadoProyectosByTemporalidad);
// router.get('/listados/proyectos/unidadEstudio', );
router.get('/listados/proyectos/poblacion', getListadoProyectosByPoblacion);
router.get('/listados/proyectos/muestra', getListadoProyectosByMuestra);
router.get('/listados/proyectos/evento', getListadoProyectosByEvento);
router.get('/listados/proyectos/tipoInvestigacion', getListadoProyectosByTipoInvestigacion);
router.get('/listados/proyectos/nivelInvestigacion', getListadoProyectosByNivelInvestigacion);

// --------------- Tipos Investigacion y sus niveles
router.get('/listados/tiposInvestigacionNiveles', getListadoTiposInvestigacionNiveles);

// --------------- Tipos de Eventos ( clase de eventos )
router.get('/listados/tiposEventos', getListadoTiposEventos);

// --------------- Niveles de la Fundamentacion 
router.get('/listados/nivelesFundamentacion/allLevels', getListadoNivelesFundamentacionAllLevels);
router.get('/listados/nivelesFundamentacion/descriptivo', getListadoNivelesFundamentacionDescriptivo);
router.get('/listados/nivelesFundamentacion/analitico', getListadoNivelesFundamentacionAnalitico);
router.get('/listados/nivelesFundamentacion/comparativo', getListadoNivelesFundamentacionComparativo);
router.get('/listados/nivelesFundamentacion/explicativo', getListadoNivelesFundamentacionExplicativo);
router.get('/listados/nivelesFundamentacion/predictivo', getListadoNivelesFundamentacionPredictivo);

// -------------- Modalidades  (revisar no trae nada el query)
router.get('/listados/modalidades/proyectiva', getListadoModalidadesProyectiva);

// -------------- Tipos de Tecnicas de Recoleccion de Informacion
router.get('/listados/tecnicasRecoleccion', getListadoTiposTecnicasRecoleccion);

// -------------- Tipos de Tecnicas de Analisis
router.get('/listados/tecnicasAnalisis', getListadoTiposTecnicasAnalisis);

// -------------- Investigaciones por Disciplina 
router.get('/listados/investigacionesDisciplina/:idDisciplina', getListadoInvestigacionesDisciplina);

// -------------- Contextos Atendidos 
router.get('/listados/contextosAtendidos', getListadoContextosAtendidos);

// -------------- Fichas por los diferentes tipos de Categoria
router.get('/listados/fichasCategoria', getListadoFichasCategoria); 
// -------------- Fichas por Condicion 
router.get('/listados/fichasCondicion', getListadoFichasCondicion); 

// -------------- Tipos de Unidades Informacion
router.get('/listados/TiposUnidadesInformacion', getListadoTiposUnidadesInformacion); // FALTA QUERY 

// -------------------------- Instrumentos por Evento 
router.get('/instrumentoEvento', getInstrumentoEvento);

// -------------------------- Esqueleto del Informe del Proyecto
router.get('/esqueletoProyecto/:idTemaInvestigacion', getEsqueletoProyectoByTemaInvestigacion);

// -------------------------- Formularios de Carga
router.get('/formulariosCarga', getFormulariosCarga); // FALTA QUERY 

// -------------------------- Historial Modificaciones 
router.get('/historialModificaciones/:idTemaInvestigacion', getHistorialModificacionesByTemaInvestigacion);

// -------------------------- Holograma Investigacion
router.get('/hologramaInvestigacion', getHologramaInvestigacion); // FALTA QUERY

// -------------------------- Lista Instituciones Investigacion
router.get('/listaInstitucionesInvestigacion/:idRol', getListaInstitucionesInvestigacionByRol);

// -------------------------- Reportes de Calidad 




module.exports = router;