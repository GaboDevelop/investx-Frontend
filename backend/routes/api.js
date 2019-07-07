
const { Router } = require('express');
const router = Router();

const  { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../service/usuarioService.js');

router.get('/usuarios', getUsers);
router.get('/usuarios/:id', getUserById);
router.post('/usuario', createUser);
router.put('/usuario/:id', updateUser);
router.put('/usuario/delete/:id', deleteUser);
module.exports = router;