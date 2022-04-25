const { Usuario, sequelize } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const usuariosController = {
  getAll: (req, res) => {
    let { page = 1, filtro: key } = req.query;
    let opt = {
      order: [[`nome`, `ASC`]],
      limit: 10,
      offset: (page - 1) * 10,
    };

    if (key) {
      opt.where = {
        [Op.or]: {
          id: { [Op.like]: `%${key}%` },
          nome: { [Op.like]: `%${key}%` },
          sobrenome: { [Op.like]: `%${key}%` },
          setor: { [Op.like]: `%${key}%` },
          perfil: { [Op.like]: `%${key}%` },
          email: { [Op.like]: `%${key}%` },
        },
      };
    }
    Usuario.findAndCountAll(opt)
      .then(({ count: total, rows: usuarios }) => {
        console.log(usuarios);
        let totalPagina = Math.round(total / 10);
        res.status(200).send({ usuarios, totalPagina });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: err.message || 'Erro',
        });
      });
  },

  store: (req, res) => {
    const { nome, sobrenome, setor, ativo, perfil, email, senha } = req.body;
    Usuario.create({
      nome,
      sobrenome,
      setor,
      ativo,
      perfil,
      email,
      senha,
    })
      .then((inclusao) => {
        res.status(200).send(inclusao);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Erro',
        });
      });
  },

  update: (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, setor, ativo, perfil, email, senha } = req.body;
    Usuario.update(
      {
        nome,
        sobrenome,
        setor,
        ativo,
        perfil,
        email,
        senha,
      },
      {
        where: {
          id,
        },
      }
    )

      .then((usuario) => {
        res.status(200).send(usuario);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Erro',
        });
      });
  },

  consult: (req, res) => {
    const { id } = req.params;
    Usuario.findByPk(id)

      .then((usuario) => {
        res.status(200).send(usuario);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Erro',
        });
      });
  },

  destroy: (req, res) => {
    const { id } = req.params;
    Usuario.destroy({
      where: { id },
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: err.message || 'Erro',
        });
      });
  },

  getById: (req, res) => {
    let key = req.params.id;

    Usuario.findByPk(key)
      .then((usuario) => {
        res.status(200).send(usuario);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Erro',
        });
      });
  },
};

module.exports = usuariosController;
