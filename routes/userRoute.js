const { Router } = require('express');

const { getUser, loginStatus } = require('../controllers/userControllers');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.get("/", authMiddleware, getUser);

module.exports = router;