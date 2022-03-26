var express = require('express');
var router = express.Router();
const estoqueController = require('../controllers/estoqueController')

router.get('/', estoqueController.index)

 
  module.exports = router;