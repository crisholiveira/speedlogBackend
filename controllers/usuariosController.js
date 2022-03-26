const { Usuario, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const usuariosController = {
    index: async (req, res) => {
        let { page = 1 } = req.query
        let { count: total, rows: usuarios } = await Usuario.findAndCountAll({
            limit: 10,
            offset: (page - 1) * 10

        })
        let totalPagina = Math.round(total / 10)
        return res.render('usuarios', { usuarios, totalPagina })

    },
    create: (req, res) => {

        return res.render('cadastroUsuario')
    },
    store: async (req, res) => {
        const { nome, sobrenome, setor, ativo, perfil, email } = req.body;
        const inclusao = await Usuario.create({
            nome,
            sobrenome,
            setor,
            ativo,
            perfil,
            email
        });
        console.log(inclusao)
        return res.redirect('/usuarios')

    },
    edit: async (req, res) => {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        return res.render('editarUsuarios', { usuario })

    },
    update: async (req, res) => {
        const { id } = req.params;
        const { nome, sobrenome, setor, ativo, perfil, email } = req.body;
        const usuario = await Usuario.update({
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
        console.log(usuario)
        return res.redirect(`/usuarios/ver/${id}`)

        /*return res.redirect('/produtos')*/

    },

    consult: async (req, res) => {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        return res.render('excluirUsuario', { usuario })
    },

    destroy: async (req, res) => {
        const { id } = req.params;
        const usuario = await Usuario.destroy({
            where: { id }

        })
        return res.redirect('/usuarios')

    },

    findByCod: async (req, res) => {
        let { id } = req.params;
        let usuario = await Usuario.findOne({
            where: {
                id: id
            }
        })
        return res.render('consultarUsuarios', { usuario })
    },
    search: async (req, res) => {
        let { page = 1 } = req.query
        let { key } = req.query;
        let { count: total, rows: usuarios } = await Usuario.findAndCountAll({
            where: {
                [Op.or]: {
                    nome: { [Op.like]: `%${key}%` },
                    sobrenome: { [Op.like]: `%${key}%` }
                }
            },
            order: [[`nome`, `ASC`]],
            limit: 10,
            offset: (page - 1) * 10
        })
        let totalPagina = Math.round(total / 10)
        return res.render('usuarios', { usuarios, totalPagina })

    }
}
module.exports = usuariosController


