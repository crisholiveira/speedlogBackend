var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')

router.get('/', usuariosController.index)
router.get('/ver/:id', usuariosController.findByCod)
router.get('/search', usuariosController.search)
router.get('/cadastro', usuariosController.create)
router.post('/cadastro', usuariosController.store)
router.get('/editar/:id', usuariosController.edit)
router.post('/editar/:id', usuariosController.update)
router.get('/excluir/:id', usuariosController.consult)
router.post('/excluir/:id', usuariosController.destroy)


 
  module.exports = router;