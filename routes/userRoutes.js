const express = require("express");
const userController = require("../controllers/userController");
const { requireAuth } = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/query', requireAuth, userController.get_user_details)
router.put('/set_user_theme', requireAuth, userController.set_user_theme)
router.put('/set_display_name', requireAuth, userController.set_user_display_name)
router.put('/set_user_avatar', requireAuth, userController.set_user_avatar)
router.post('/set_user_password', requireAuth, userController.set_user_password)

module.exports = router;