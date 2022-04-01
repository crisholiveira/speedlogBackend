var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController')

router.get('/', produtosController.index)
router.get('/:id', produtosController.search)
router.post('/', produtosController.store)
router.put('/:id', produtosController.update)
router.delete('/:id', produtosController.destroy)


 
  module.exports = router;