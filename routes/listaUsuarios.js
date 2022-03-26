var express = require('express');
var router = express.Router();
const listaUsuariosController = require('../controllers/listaUsuariosController')

router.get('/', listaUsuariosController.index)

 
  module.exports = router;