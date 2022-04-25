const Usuario = require("../models/Usuario");
const bcrypt = require('bcrypt');

const loginController = {
    index: (req, res) => {
        
      
    },

    login: (req,res) => {
        let {email,senha} = req.body;

        Usuario.findOne({
            where: {
                email: email
            }
        }).then((user => {
            if (bcrypt.compareSync(user.senha, bcrypt.hashSync(senha, 10))){
                res.status(200).send(user);
            }
        }))

    }

  

}
module.exports = loginController;

