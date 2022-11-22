const { Router } = require('express');
const router = Router();

const { register } = require("../controllers/userController");
const { registerValidation } = require('../validations/userValidations');

router.post("/register", registerValidation ,register);


module.exports = router;