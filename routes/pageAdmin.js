const router= require('express').Router();
const Controller = require('../controllers/pageAdminController')

const multer= require('multer');
const path= require('path');

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/images')
    },
    filename: (req, file,cb)=>{
        cb(null, Date.now()+path.extname(file.originalname))
    }
})

const upload= multer({storage:storage })


router.get('/admin', Controller.homeAdmin)

router.get('/admin/add', Controller.addForm)

router.post('/admin/add', upload.single("imagePath"), Controller.add)

router.get('/admin/:id/delete', Controller.delete)

router.get('/admin/:id/restock', Controller.formRestock)

router.post('/admin/:id/restock', Controller.restock)

module.exports = router