const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required(),
        telefone: Joi.string().required(),
        sexo: Joi.string().required(),
        idade: Joi.required()
    })
})