const router= require('express').Router();
const Controller= require('../controllers/controller');
const routerUser = require('./userRoute')
const routerUserPage = require('./pageUser')
const routerAdminPage = require('./pageAdmin')



router.get('/', Controller.home)

router.use('/', routerUser)

router.use(function (req, res, next){
    if(!req.session.userId) {
        res.redirect('/login')
    }else{
        next()
    }
})

router.use('/', routerUserPage)

router.use('/', routerAdminPage)





module.exports= router