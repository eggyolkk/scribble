const express = require("express");
const userController = require("../controllers/userController");
const { requireAuth } = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/query', requireAuth, userController.get_user_details)
router.put('/set_user_theme', requireAuth, userController.set_user_theme)

module.exports = router;