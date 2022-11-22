const { body } = require("express-validator");

const emailExist = require("../helpers/emailExist");
const errorHandler = require("../middleware/errorHandler");

const registerValidation = [
    body('name', 'Campo nombre es obligatorio').not().isEmpty(),
    body('email', 'Campo email es obligatorio').isEmail(),
    body('password', 'Por favor ingrese una contraseña de al menos 6 caracteres').isLength({min: 6}),
    body('email').custom(emailExist),
    errorHandler
];

module.exports = {
    registerValidation,
}