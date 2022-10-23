const express = require("express");
const usuarioController = require("../controllers/usuariosController");
const authController = require("../controllers/authController");
const usuarioCreatValidation = require("../validations/usuarios/creat");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");
const routes = express.Router();

routes.post("/usuarios", usuarioCreatValidation, usuarioController.registro);
routes.post("/login", authLoginValidation, authController.login);
routes.put('/usuarios/:id', usuarioController.atualizarUsuarios);
routes.delete('/usuarios/:id', usuarioController.deletarUsuarios)

module.exports = routes;