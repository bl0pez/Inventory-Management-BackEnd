const { Router } = require('express');
const router = Router();

const { register, login, logout } = require("../controllers/authController");
const { registerValidation, loginValidation } = require('../validations/userValidations');

router.post("/register", registerValidation ,register);
router.post("/login" , loginValidation , login);
router.get("/logout", logout);

module.exports = router;