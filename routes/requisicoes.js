var express = require('express');
var router = express.Router();
const requisicoesController = require('../controllers/requisicoesController')

router.get('/', requisicoesController.index)

 
  module.exports = router;