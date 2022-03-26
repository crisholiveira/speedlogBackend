const { Usuario } = require ('../models')

const listaUsuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll()
        
            return res.render('listaUsuarios', {usuarios})       
        
    }
}
module.exports = listaUsuariosController;