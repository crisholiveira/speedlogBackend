var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const {check} = require('express-validator')



router.get('/', usuariosController.index)
router.get('/:id', usuariosController.search)

router.post('/', [
                check('nome').notEmpty(),
                check('sobrenome').notEmpty(),
                check('setor').notEmpty(),
                check('ativo').notEmpty().isInt(),
                check('perfil').notEmpty(),
                check('email').notEmpty().isEmail(),
                check('senha').isLength({min: 8}).notEmpty()
        ],usuariosController.store)

router.put('/:id', usuariosController.update)
router.delete('/:id', usuariosController.destroy)

module.exports = router;






 
