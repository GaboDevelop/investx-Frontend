
const { Router } = require('express');
const router = Router();


//----------------- CONTROLLERS  -------------------- 
const { getUsers, getUserById, createUser, updateUser, deleteUser, getUserByCorreo, getUsersAndRoles } = require('../service/usuarioService.js');
const { getProyectivas, getProyectivaById, createProyectiva, updateProyectiva, deleteProyectiva } = require('../service/proyectivaService.js');
const { getUnidadById, getUnidadEstudio, createUnidadEstudio, updateUnidaEstudio, deleteUnidadEstudio} = require('../service/unidadEstudioService.js');
const { getAbordaje, getAbordajeById, createAbordaje, updateAbordaje, deleteAbordaje } =  require('../service/abordajeService.js');
const { getContextos, getContextoById, createContexto, updateContexto, deleteContexto } =  require('../service/contextoService.js');
const { getEventos, getEventoById, createEvento, updateEvento, deleteEvento } = require('../service/eventoService.js');
const { getFundamentos, getFundamentoById, createFundamento, updateFundamento, deleteFundamento} = require('../service/fundamentoProyectivoService.js');
const { getJustificacion, getJustificacionById, createJustificacion, updateJustificacion, deleteJustificacion } = require('../service/justificacionService.js');

//----------------- CONTROLLERS CONSULTAS -------------------- 

const { getTablaHolopraxica, getTablaArgumentosJustificacion, getTablaPoblacionMuestra } = require('../service/tablasService');
const { getListadoArgumentosByContexto, getListadoArgumentosByEvento, getListadoArgumentosByTemporalidad, getListadoArgumentosByTipoInvestigacion, getListadoArgumentosByUnidadEstudio, getListadoContextosAtendidos, getListadoInvestigacionesDisciplina, getListadoModalidadesProyectiva, getListadoNivelesFundamentacionAllLevels, getListadoNivelesFundamentacionAnalitico, getListadoNivelesFundamentacionComparativo, getListadoNivelesFundamentacionDescriptivo, getListadoNivelesFundamentacionExplicativo, getListadoNivelesFundamentacionPredictivo, getListadoProyectosByContexto, getListadoProyectosByEvento, getListadoProyectosByMuestra, getListadoProyectosByNivelInvestigacion, getListadoProyectosByPoblacion, getListadoProyectosByTemporalidad, getListadoProyectosByTipoInvestigacion, getListadoTiposEventos, getListadoTiposInvestigacionNiveles, getListadoTiposTecnicasAnalisis, getListadoTiposTecnicasRecoleccion } = require('../service/listadosService');


//--------------- ROUTES -------------------------

// Usuario
router.get('/usuarios', getUsers);
router.get('/usuarios/:id', getUserById);
router.get('/usuarios/listado', getUsersAndRoles);
router.post('/usuarios', createUser);
router.put('/usuarios/:id', updateUser);
router.put('/usuarios/:id/disable', deleteUser);
router.get('/usuarios/:correo/correo', getUserByCorreo);

// Proyectiva 
router.get('/proyectivas', getProyectivas);
router.get('/proyectivas/:id', getProyectivaById);
router.post('/proyectivas', createProyectiva);
router.put('/proyectivas/:id', updateProyectiva);
router.put('/proyectivas/:id/disable', deleteProyectiva);


// Unidad de Estudio 
router.get('/unidadEstudios', getUnidadEstudio);
router.get('/unidadEstudios/:id', getUnidadById);
router.post('/unidadEstudios', createUnidadEstudio);
router.put('/unidadEstudios/:id', updateUnidaEstudio);
router.put('/unidadEstudios/:id/disable', deleteUnidadEstudio);

// Abordaje 
router.get('/abordajes',getAbordaje);
router.get('/abordajes/:id', getAbordajeById);
router.post('/abordajes', createAbordaje);
router.put('/abordajes/:id', updateAbordaje);
router.put('/abordajes/:id/disable', deleteAbordaje);

// Contexto  PROBARRRR
router.get('/contextos', getContextos);
router.get('/contextos/:id', getContextoById);
router.post('/contextos', createContexto);
router.put('/contextos/:id', updateContexto);
router.put('/contextos/:id/disable', deleteContexto);



// Evento 
router.get('/eventos', getEventos);
router.get('/eventos/:id', getEventoById);
router.post('/eventos', createEvento);
router.put('/eventos/:id', updateEvento);
router.put('/eventos/:id/disable', deleteEvento);

// Fundamento Proyectivo 
router.get('/fundamentos',getFundamentos );
router.get('/fundamentos/:id', getFundamentoById);
router.post('/fundamentos', createFundamento);
router.put('/fundamentos/:id', updateFundamento);
router.put('/fundamentos/:id/disable', deleteFundamento);

//  Justificacion 
router.get('/justificaciones',getJustificacion );
router.get('/justificaciones/:id', getJustificacionById);
router.post('/justificaciones', createJustificacion);
router.put('/justificaciones/:id', updateJustificacion);
router.put('/justificaciones/:id/disable', deleteJustificacion);

//     Tablas 

router.get('/tablas/holopraxica', getTablaHolopraxica);
router.get('/tablas/poblacionMuestra', getTablaPoblacionMuestra);
router.get('/tablas/argumentosJustificacion', getTablaArgumentosJustificacion);


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

// -------------- Modalidades 
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
//router.get('/listados/',);

// -------------- Fichas por Condicion 
//router.get('/listados/',);

// -------------- Tipos de Unidades Informacion
//router.get('/listados/',);


module.exports = router;