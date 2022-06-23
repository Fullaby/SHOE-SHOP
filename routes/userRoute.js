const router= require('express').Router();
const UserController= require('../controllers/userController');

router.get('/register', UserController.registrasi)
router.post('/register', UserController.postRegistrasi)
router.get('/login', UserController.login)
router.post('/login', UserController.loginPost)


module.exports = router