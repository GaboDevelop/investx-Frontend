
const { Router } = require('express');
const router = Router();


//----------------- CONTROLLERS  -------------------- 
const  { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../service/usuarioService.js');
const { getProyectivas, getProyectivaById, createProyectiva, updateProyectiva, deleteProyectiva } = require('../service/proyectivaService.js');
const {getUnidadById, getUnidadEstudio, createUnidadEstudio, updateUnidaEstudio, deleteUnidadEstudio} = require('../service/unidadEstudioService.js');




//--------------- ROUTES -------------------------

// Usuario
router.get('/usuarios', getUsers);
router.get('/usuarios/:id', getUserById);
router.post('/usuario', createUser);
router.put('/usuario/:id', updateUser);
router.put('/usuario/delete/:id', deleteUser);

// Proyectiva 
router.get('/proyectiva', getProyectivas);
router.get('/proyectiva/:id', getProyectivaById);
router.post('/proyectiva', createProyectiva);
router.put('/proyectiva/:id', updateProyectiva);
router.put('/proyectiva/delete/:id', deleteProyectiva);


// Unidad de Estudio 
router.get('/unidadEstudio', getUnidadEstudio);
router.get('/unidadEstudio/:id', getUnidadById);
router.post('/unidadEstudio', createUnidadEstudio);
router.put('/unidadEstudio/:id', updateUnidaEstudio);
router.put('/unidadEstudio/delete/:id', deleteUnidadEstudio);

// Abordaje 


// Contexto 


// Evento 



// Fundamento Proyectivo 



//  Justificacion 



module.exports = router;