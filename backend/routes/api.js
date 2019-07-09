
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
router.put('/analisis/:id', deleteAnalisisEvento);


// ------------------------ Aspecto Legal ----------------------------------------
router.get('/aspectos/:id', getAspectoLegalById );
router.post('/aspectos', createAspectoLegal);
router.put('/aspectos/:id', updateAspectoLegal );
router.put('/aspectos/:id', deleteAspectoLegal);

// ------------------------ Categoria  ----------------------------------------
router.get('/categorias/:id', getCategoriaById);
router.post('/categorias', createCategoria );
router.put('/categorias/:id', updateCategoria);
router.put('/categorias/:id', deleteCategoria);


// ------------------------ Categoria Unidad Informativa  ----------------------------------------
router.get('/categoriasUnidades/:id',getCategoriaUnidadInformativaById );
router.post('/categoriasUnidades',createCategoriaUnidadInformativa );
router.put('/categoriasUnidades/:id', updateCategoriaUnidadInformativa);
router.put('/categoriasUnidades/:id', deleteCategoriaUnidadInformativa);

// ------------------------ Clase Evento ----------------------------------------
router.get('/clases/:id',getClaseEventoById );
router.post('/clases', createClaseEvento );
router.put('/clases/:id', updateClaseEvento );
router.put('/clases/:id', deleteClaseEvento);


// ------------------------ Comparacion ----------------------------------------
router.get('/comparaciones/:id', getComparacionById);
router.post('/comparaciones', createComparacion );
router.put('/comparaciones/:id', updateComparacion);
router.put('/comparaciones/:id', deleteComparacion);



// ------------------------ Condicion Metodologica ----------------------------------------
router.get('/condicionesMetodologicas/:id',getCondicionMetodologicaById );
router.post('/condicionesMetodologicas', createCondicionMetodologica );
router.put('/condicionesMetodologicas/:id', updateCondicionMetodologica);
router.put('/condicionesMetodologicas/:id', deleteCondicionMetodologica);


// ------------------------ Condicion Personal  ----------------------------------------
router.get('/condicionesPersonales/:id', getCondicionPersonalById);
router.post('/condicionesPersonales',createCondicionPersonal );
router.put('/condicionesPersonales/:id', updateCondicionPersonal);
router.put('/condicionesPersonales/:id', deleteCondicionPersonal);

// ------------------------ Condicion Social  ----------------------------------------
router.get('/condicionesSociales/:id',getCondicionSocialById );
router.post('/condicionesSociales',createCondicionSocial );
router.put('/condicionesSociales/:id',updateCondicionSocial );
router.put('/condicionesSociales/:id', deleteCondicionSocial);


// ------------------------ Consecuencia ----------------------------------------
router.get('/consecuencias/:id', getConsecuenciaById );
router.post('/consecuencias', createConsecuencia);
router.put('/consecuencias/:id', updateConsecuencia);
router.put('/consecuencias/:id', deleteConsecuencia );



// ------------------------ Consecuencia Tema ----------------------------------------
router.get('/consecuenciasTemas/:id',getConsecuenciaTemaById );
router.post('/consecuenciasTemas',createConsecuenciaTema );
router.put('/consecuenciasTemas/:id',updateConsecuenciaTema );
router.put('/consecuenciasTemas/:id',deleteConsecuenciaTema );


// ------------------------ Indicio ----------------------------------------
router.get('/indicios/:id', getIndicioById);
router.post('/indicios', createIndicio );
router.put('/indicios/:id',updateIndicio);
router.put('/indicios/:id', deleteIndicio);




// ------------------------ Contexto Unidad Estudio ----------------------------------------
router.get('/contextosUnidades/:id', getContextoUnidadEstudioById);
router.post('/contextosUnidades', createContextoUnidadEstudio);
router.put('/contextosUnidades/:id', updateContextoUnidadEstudio);
router.put('/contextosUnidades/:id', deleteContextoUnidadEstudio );





// ------------------------ Contradiccion ----------------------------------------
router.get('/contradicciones/:id', getContradiccionById );
router.post('/contradicciones',createContradiccion );
router.put('/contradicciones/:id', updateContradiccion);
router.put('/contradicciones/:id', deleteContradiccion);



// ------------------------ Curiosidad ----------------------------------------
router.get('/curiosidades/:id', getCuriosidadById);
router.post('/curiosidades', createCuriosidad);
router.put('/curiosidades/:id',updateCuriosidad );
router.put('/curiosidades/:id', deleteCuriosidad);


// ------------------------ Descripcion Evento ----------------------------------------
router.get('', getDescripcionEventoById);
router.post('', createDescripcionEvento );
router.put('',updateDescripcionEvento );
router.put('', deleteDescripcionEvento);



// ------------------------ Diferencia ----------------------------------------
router.get('', getDiferenciaById);
router.post('',createDiferencia );
router.put('', updateDiferencia);
router.put('', deleteDiferencia );


// ------------------------ Disciplina Evento ----------------------------------------
router.get('', getDisciplinaEventoById);
router.post('', createDisciplinaEvento);
router.put('', updateDisciplinaEvento);
router.put('', deleteDisciplinaEvento);



// ------------------------ Disciplina ----------------------------------------
router.get('', getDisciplinaById );
router.post('', createDisciplina );
router.put('', updateDisciplina);
router.put('', deleteDisciplina);



// ------------------------ Diseno Investigacion ----------------------------------------
router.get('',getDisenoInvestigacionById );
router.post('', createDisenoInvestigacion);
router.put('', updateDisenoInvestigacion);
router.put('',deleteDisenoInvestigacion);



// ------------------------ Efecto a Lograr ----------------------------------------
router.get('',getEfectoLograrById );
router.post('', createEfectoLograr );
router.put('', updateEfectoLograr);
router.put('', deleteEfectoLograr );


// ------------------------ Estadio  ----------------------------------------
router.get('',getEstadioById );
router.post('',createEstadio );
router.put('', updateEstadio);
router.put('', deleteEstadio);


// ------------------------ Estructuracion Previa ----------------------------------------
router.get('',getEstructuracionPreviaById );
router.post('', createEstructuracionPrevia);
router.put('',updateEstructuracionPrevia );
router.put('', deleteEstructuracionPrevia);


// ------------------------ Evento Proyectiva ----------------------------------------
router.get('',getEventoProyectivaById );
router.post('',createEventoProyectiva );
router.put('', updateEventoProyectiva);
router.put('',deleteEventoProyectiva );



// ------------------------ Explicacion ----------------------------------------
router.get('', getExplicacionById);
router.post('', createExplicacion);
router.put('',updateExplicacion );
router.put('',deleteExplicacion );



// ------------------------ Fuente ----------------------------------------
router.get('',getFuenteById );
router.post('', createFuente);
router.put('', updateFuente);
router.put('', deleteFuente);


// ------------------------ Fundamento Proyectivo Aspecto Legal ----------------------------------------
router.get('',getFundamentoProyectivoAspectoById );
router.post('',createFundamentoProyectivoAspecto );
router.put('', updateFundamentoProyectivoAspecto);
router.put('',deleteFundamentoProyectivoAspecto );



// ------------------------ Fundamento Proyectivo Investigacion ----------------------------------------
router.get('', getFundamentoProyectivoInvestigacionById);
router.post('', createFundamentoProyectivoInvestigacion);
router.put('', updateFundamentoProyectivoInvestigacion);
router.put('', deleteFundamentoProyectivoInvestigacion);


// ------------------------ Grado Participacion ----------------------------------------
router.get('',getGradoParticipacionById );
router.post('', createGradoParticipacion);
router.put('',updateGradoParticipacion );
router.put('',deleteGradoParticipacion );



// ------------------------ Instrumento ----------------------------------------
router.get('', getInstrumentoById);
router.post('',createInstrumento );
router.put('', updateInstrumento);
router.put('', deleteInstrumento);


// ------------------------ Involucrado ----------------------------------------
router.get('', getInvolucradoById);
router.post('', createInvolucrado);
router.put('',updateInvolucrado );
router.put('',deleteInvolucrado );


// ------------------------ Involucrado Tema Investigacion  ----------------------------------------
router.get('', getInvolucradoTemaIById);
router.post('',createInvolucradoTemaI );
router.put('',updateInvolucradoTemaI );
router.put('', deleteInvolucradoTemaI);



// ------------------------ Item ----------------------------------------
router.get('',getItemById );
router.post('',createItem );
router.post('', updateItem);
router.put('', deleteItem);


// ------------------------ Motivacion ----------------------------------------

router.get('', getMotivacionById);
router.put('', createMotivacion);
router.put('',updateMotivacion );
router.put('',deleteMotivacion );

// ------------------------ Muestra ----------------------------------------
router.get('',getMuestraById );
router.post('',createMuestra );
router.put('',updateMuestra );
router.put('',deleteMuestra );


// ------------------------ Necesidad  ----------------------------------------
router.get('',getNecesidadById );
router.post('',createNecesidad );
router.put('',updateNecesidad );
router.put('', deleteNecesidad);


// ------------------------ Nivel Investigacion ----------------------------------------
router.get('',getNivelInvestigacionById );
router.post('',createNivelInvestigacion );
router.put('', updateNivelInvestigacion);
router.put('',deleteNivelInvestigacion );



// ------------------------ Objetivo Especifico ----------------------------------------
router.get('',getObjetivoEspecificoById );
router.post('',createObjetivoEspecifico );
router.put('', updateObjetivoEspecifico);
router.put('',deleteObjetivoEspecifico );


// ------------------------ Objetivo General ----------------------------------------
router.get('', getObjetivoGeneralById);
router.post('', createObjetivoGeneral);
router.put('', updateObjetivoGeneral);
router.put('', deleteObjetivoGeneral);


// ------------------------ Oportunidad ----------------------------------------
router.get('', getOportunidadById);
router.post('',createOportunidad);
router.put('', updateOportunidad);
router.put('',deleteOportunidad );



// ------------------------ Perspectiva Interpretacion ----------------------------------------
router.get('',getPerspectivaInterpretacionById );
router.post('',createPerspectivaInterpretacion );
router.put('', updatePerspectivaInterpretacion);
router.put('',deletePerspectivaInterpretacion );



// ------------------------ Poblacion ----------------------------------------
router.get('',getPoblacionById );
router.post('', createPoblacion);
router.put('',updatePoblacion );
router.put('', deletePoblacion);


// ------------------------ Potencialidad ----------------------------------------
router.get('', getPotencialidadById);
router.post('', createPotencialidad);
router.put('',updatePotencialidad );
router.put('', deletePotencialidad);



// ------------------------ Prediccion ----------------------------------------
router.get('',getPrediccionById );
router.post('', createPrediccion);
router.put('',updatePrediccion );
router.put('', deletePrediccion);


// ------------------------ Proceso Explicativo ----------------------------------------
router.get('',getProcesoExplicativoById );
router.post('', createProcesoExplicativo);
router.put('',updateProcesoExplicativo );
router.put('',deleteProcesoExplicativo );



// ------------------------ Proyecto ----------------------------------------
router.get('', getProyectoById);
router.post('', createProyecto);
router.put('',updateProyecto );
router.put('', deleteProyecto);


// ------------------------ Rol ----------------------------------------
router.get('', getRolById);
router.post('', createRol);
router.put('',updateRol );
router.put('', deleteRol);


// ------------------------ Rol Usuario ----------------------------------------
router.get('', getRolUsuarioById);
router.post('',createRolUsuario );
router.put('',updateRolUsuario );
router.put('', deleteRolUsuario);


// ------------------------ Semejanza Categoria ----------------------------------------
router.get('', getSemejanzaCategoriaById);
router.post('',createSemejanzaCategoria );
router.put('',updateSemejanzaCategoria );
router.put('',deleteSemejanzaCategoria );

// ------------------------ Sinergia ----------------------------------------
router.get('', getSinergiaById);
router.post('', createSinergia);
router.put('',updateSinergia );
router.put('',deleteSinergia );


// ------------------------ Tecnica Analisis ----------------------------------------
router.get('', getTecnicaAnalisisById);
router.post('', createTecnicaAnalisis);
router.put('',updateTecnicaAnalisis );
router.put('',deleteTecnicaAnalisis);


// ------------------------ Tecnica Obtencion Informacion ----------------------------------------
router.get('', getTecnicaObtencionInformacionById);
router.post('',createTecnicaObtencionInformacion );
router.put('', updateTecnicaObtencionInformacion);
router.put('',deleteTecnicaObtencionInformacion );



// ------------------------ Tecnica Obtencion Informacion U ----------------------------------------
router.get('', getTecnicaObtencionInformacionUById);
router.post('',createTecnicaObtencionInformacionU);
router.put('',updateTecnicaObtencionInformacionU);
router.put('',deleteTecnicaObtencionInformacionU );


// ------------------------ Tema Investigacion  ----------------------------------------
router.get('',getTemaInvestigacionById );
router.post('',createTemaInvestigacion );
router.put('',updateTemaInvestigacion );
router.put('',deleteTemaInvestigacion );



// ------------------------ Temporalidad Medicion ----------------------------------------
router.get('', getTemporalidadMedicionById);
router.post('', createTemporalidadMedicion);
router.put('', updateTemporalidadMedicion);
router.put('',deleteTemporalidadMedicion );


// ------------------------ Temporadlidad Medicion Contexto ----------------------------------------
router.get('', getTemporalidadMedicionContextoById);
router.post('',createTemporalidadMedicionContexto );
router.put('',updateTemporalidadMedicionContexto );
router.put('',deleteTemporalidadMedicionContexto );


// ------------------------ Tendencia ----------------------------------------
router.get('', getTendenciaById);
router.post('', createTendencia);
router.put('',updateTendencia );
router.put('',deleteTendencia );


// ------------------------ Tipo Invesstigacion  ----------------------------------------
router.get('', getTipoInvestigacionById);
router.post('', createTipoInvestigacion);
router.put('',updateTipoInvestigacion );
router.put('', deleteTipoInvestigacion);

// ------------------------ Unidad Informativa ----------------------------------------
router.get('',getUnidadInformativaById );
router.post('',createUnidadInformativa );
router.put('',updateUnidadInformativa );
router.put('',deleteUnidadInformativa );


// ------------------------ Version ----------------------------------------
router.get('', getVersionById);
router.post('', createVersion);
router.put('', updateVersion);
router.put('',deleteVersion );


// ------------------------------- Tablas ---------------------------------------------

router.get('/tablas/holopraxica', getTablaHolopraxica);
router.get('/tablas/poblacionMuestra', getTablaPoblacionMuestra);
router.get('/tablas/argumentosJustificacion', getTablaArgumentosJustificacion);
router.get('/tablas/especificaciones', getTablaEspecificaciones); // FALTA QUERY
router.get('/tablas/operacionalizacion', getTablaOperacionalizacion); // FALTA QUERY


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
router.get('/listados/fichasCategoria', getListadoFichasCategoria); // FALTA QUERY
// -------------- Fichas por Condicion 
router.get('/listados/fichasCondicion', getListadoFichasCondicion); // FALTA QUERY

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