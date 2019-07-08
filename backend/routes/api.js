
const { Router } = require('express');
const router = Router();


//----------------- CONTROLLERS  -------------------- 
const { getUsers, getUserById, createUser, updateUser, deleteUser, getUserByCorreo } = require('../service/usuarioService.js');
const { getProyectivas, getProyectivaById, createProyectiva, updateProyectiva, deleteProyectiva } = require('../service/proyectivaService.js');
const { getUnidadById, getUnidadEstudio, createUnidadEstudio, updateUnidaEstudio, deleteUnidadEstudio} = require('../service/unidadEstudioService.js');
const { getAbordaje, getAbordajeById, createAbordaje, updateAbordaje, deleteAbordaje } =  require('../service/abordajeService.js');
const { getContextos, getContextoById, createContexto, updateContexto, deleteContexto } =  require('../service/contextoService.js');
const { getEventos, getEventoById, createEvento, updateEvento, deleteEvento } = require('../service/eventoService.js');
const { getFundamentos, getFundamentoById, createFundamento, updateFundamento, deleteFundamento} = require('../service/fundamentoProyectivoService.js');
const { getJustificacion, getJustificacionById, createJustificacion, updateJustificacion, deleteJustificacion } = require('../service/justificacionService.js');

//--------------- ROUTES -------------------------

// Usuario
router.get('/usuarios', getUsers);
router.get('/usuarios/:id', getUserById);
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


module.exports = router;