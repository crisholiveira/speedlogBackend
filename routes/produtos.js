var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController')

router.get('/', produtosController.index)
router.get('/search', produtosController.search)
router.post('/', produtosController.store)
router.put('/editar/:id', produtosController.update)
router.get('/:id', produtosController.consult)
router.delete('/:id', produtosController.destroy)


 
  module.exports = router;