var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')

router.get('/', usuariosController.index)
router.get('/:id', usuariosController.search)
router.post('/', usuariosController.store)
router.put('/:id', usuariosController.update)
router.delete('/:id', usuariosController.destroy)

module.exports = router;