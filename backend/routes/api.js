
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
router.get('/usuarios/:id', getUserById);
router.get('/usuarios/roles', getUsersAndRoles);
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