const router= require('express').Router();
const pageUserController = require('../controllers/pageUserController');


router.get('/home', pageUserController.home)

router.get('/home/checkout', pageUserController.checkout)

router.get('/home/:id/buy', pageUserController.buy)



module.exports = router