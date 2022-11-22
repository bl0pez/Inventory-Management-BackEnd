const { Router } = require('express');
const router = Router();

const { register, login } = require("../controllers/userController");
const { registerValidation, loginValidation } = require('../validations/userValidations');

router.post("/register", registerValidation ,register);
router.post("/login" , loginValidation ,login);


module.exports = router;