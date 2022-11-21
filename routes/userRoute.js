const { Router } = require('express');
const router = Router();

const { register } = require("../controllers/userController");

router.post("/register", register);


module.exports = router;