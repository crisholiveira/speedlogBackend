
const indexController = {
    index: (req, res) => {
        
        res.render('index')
    },

    logarUsuario: (req,res) => {
        let {email,senha} = req.body;
    }
}
module.exports = indexController

