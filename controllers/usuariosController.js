const { Usuario, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {check, validationResult, body} = require('express-validator');


const usuariosController = {
    index: (req, res) => {
        let { page = 1 } = req.query
        Usuario.findAndCountAll({
            limit: 10,
            offset: (page - 1) * 10

        })
            .then(({ count: total, rows: usuarios }) => {
                let totalPagina = Math.round(total / 10)
                res.status(200).send({ usuarios, totalPagina });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || 'Erro'
                })
            })
    },

    /*create: (req, res) => {

        return res.render('cadastroUsuario')
    },*/

    store: (req, res) => {
        const { nome, sobrenome, setor, ativo, perfil, email } = req.body;
        Usuario.create({
            nome,
            sobrenome,
            setor,
            ativo,
            perfil,
            email
        })
            .then(inclusao => {
                res.status(200).send(inclusao);
            })
            .catch(err => {
                res.status(500).send({
                    message: 
                        err.message || 'Erro'
                })
            })

    },


    update: (req, res) => {
        const { id } = req.params;
        const { nome, sobrenome, setor, ativo, perfil, email } = req.body;
        Usuario.update({
            nome,
            sobrenome,
            setor,
            ativo,
            perfil,
            email
        },
            {
                where: {
                    id
                }

            })
            .then(usuario => {
                res.status(200).send(usuario)
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || 'Erro'
                })
            })

    },

    consult: (req, res) => {
        const { id } = req.params;
        Usuario.findByPk(id)
        .then(usuario => {
            res.status(200).send(usuario);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Erro'
            })

        })

},

    destroy: (req, res) => {
        const { id } = req.params;
Usuario.destroy({
    where: { id }

})
    .then(usuario => {
        res.status(200).send(usuario);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Erro'
        })

    })
        

    },



search: (req, res) => {
    let { page = 1 } = req.query
    let key = req.params.id;
    let opt = {
        order: [[`nome`, `ASC`]], limit: 10,
        offset: (page - 1) * 10
    }

    if (key) {
        opt.where = {
            [Op.or]: {
                id: { [Op.like]: `%${key}%` },
                nome: { [Op.like]: `%${key}%` },
                sobrenome: { [Op.like]: `%${key}%` }
            }
        }
    }
    Usuario.findAndCountAll(opt)
        .then(({ count: total, rows: usuarios }) => {
            let totalPagina = Math.round(total / 10)
            res.status(200).send({ usuarios, totalPagina });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Erro'
            })
        })
},

}

module.exports = usuariosController


