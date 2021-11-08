const { Router } = require('express')
const authController = require('../controllers/authController')
const { requireAuth } = require('../middleware/authMiddleware')

const router = Router()

router.post('/signup', authController.signup_post)
router.post('/login', authController.login_post)
router.get('/logout', authController.logout_get)
router.get('/get_user_id', requireAuth, authController.get_user_id)
router.post('/verify_password', requireAuth, authController.verify_password)

module.exports = router