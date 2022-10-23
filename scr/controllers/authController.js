const { Usuario } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const bcrypt = require("bcryptjs");
const AuthController = {
    async login(req, res){
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({
            where: {
                email,
            },
        });
        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            return res.status(400).json("“E-mail ou senha inválido, verifique e tente novamente.");
        }
        const token = jwt.sign({
           id: usuario.id,
           email: usuario.email,
           nome: usuario.nome 
        },
        secret.key);
        return res.json(token);
    },
}
module.exports = AuthController;