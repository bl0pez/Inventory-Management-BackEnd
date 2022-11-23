const { Router } = require('express');
const router = Router();

const { register, login, logout, loginStatus } = require("../controllers/authController");
const { registerValidation, loginValidation } = require('../validations/userValidations');

router.post("/register", registerValidation ,register);
router.post("/login" , loginValidation , login);
router.get("/logged", loginStatus);
router.get("/logout", logout);

module.exports = router;