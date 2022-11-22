const { Router } = require('express');
const router = Router();

const { register, login, logout } = require("../controllers/authController");
const { getUser } = require('../controllers/userControllers');
const { registerValidation, loginValidation } = require('../validations/userValidations');

router.post("/register", registerValidation ,register);
router.post("/login" , loginValidation , login);
router.get("/logout", logout);

router.get("/user", getUser);

module.exports = router;