const { Usuario } = require("../models");
const bcrypt = require("bcryptjs");

const usuariosController = {
    async registro(req, res) {
        const { nome, email, senha, sexo, telefone, idade } = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const newUsuario = await Usuario.create({ nome, email, senha: newSenha, sexo, telefone, idade });

        return res.status(201).json(newUsuario);
    },

    async atualizarUsuarios(req, res) {
        const { id } = req.params
        const { nome, email, senha, sexo, telefone, idade } = req.body
    
        if (!id) return res.status(400).json('Erro na solicitação')
    
        const newSenha = bcrypt.hashSync(senha, 10)
    
        const usuarioAtualizado = await Usuario.update({ nome, email, senha: newSenha, sexo, telefone, idade },
          {
            where: {
              id
            }
          }
        )
        res.status(201).json('Usuario Atualizado')
      },

      async deletarUsuarios(req, res) {
        try {
          const { id } = req.params
          const deletandoUsuario = await Usuario.destroy({
            where: {
              id
            }
          })
          if (!deletandoUsuario) {
            res.status(404).json('Id não encontrado')
          } else {
            res.sendStatus(204)
          }
        } catch (error) {
          return res.status(400).json({ error })
        }
      }
}

module.exports = usuariosController;