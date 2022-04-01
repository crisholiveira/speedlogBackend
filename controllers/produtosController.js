const { Produto, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const produtosController = {
    index: (req, res) => {
        let { page = 1 } = req.query
        Produto.findAndCountAll({
            limit: 10,
            offset: (page - 1) * 10
        })
            .then(({ count: total, rows: produtos }) => {
                let totalPagina = Math.round(total / 10)
                res.status(200).send({ produtos, totalPagina });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || 'Erro'
                })
            })

    },

    /* create: (req, res) => {
 
         return res.render('cadastroProduto')
     },*/

    store: (req, res) => {
        const { codigo, nome } = req.body;
        Produto.create({
            codigo,
            nome
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
        const { codigo, nome } = req.body;
        Produto.update({
            codigo,
            nome
        },
            {
                where: {
                    id
                }

            })

            .then(produto => {
                res.status(200).send(produto);
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
        Produto.findByPk(id)

            .then(produto => {
                res.status(200).send(produto);
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
        Produto.destroy({
            where: { id }

        })
            .then(produto => {
                res.status(200).send(produto);
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
        let key  = req.params.id;
        let opt = {
            order: [[`nome`, `ASC`]], limit: 10,
            offset: (page - 1) * 10
        }

        if (key) { 
            opt.where =  {
                [Op.or]: {
                    id: { [Op.like]: `%${key}%` },
                    nome: { [Op.like]: `%${key}%` },
                    codigo: { [Op.like]: `%${key}%` }
                }}


        }
        Produto.findAndCountAll(opt)
            .then(({ count: total, rows: produtos }) => {
                let totalPagina = Math.round(total / 10)
                res.status(200).send({ produtos, totalPagina });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || 'Erro'
                })
            })
    },
}

module.exports = produtosController


