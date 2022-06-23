const { Product, Category } = require('../models') 
const { convertToID } = require('../helpers/converter')

class pageAdminController {
    static homeAdmin (req, res) {
        Product.findAll({
            include : Category
        })
        .then(data => {
            res.render('dashboardAdmin', {data, convertToID})
        })
    }

    static addForm(req, res){
        const { errors } = req.query
        Category.findAll()
        .then(data => {
            res.render('addForm', {data, errors})
        })
        .catch(err => {
            res.send(err)
        })
    }


    static add(req, res){
        const take = req.file.filename
        const {name, size, color, price, stock, imagePath, CategoryId} = req.body
        // res.send(req.file)
        Product.create({name, size, color, price, stock, imagePath:take, CategoryId})
        .then(() => {
            res.redirect('/admin')
        })
        .catch(err => {
            const errors = err.errors.map(el => {
                return el.message
            })
            res.redirect(`/admin/add?errors=${errors}`)
        })
       
    }

    static delete(req, res){
        const id = req.params.id
        Product.destroy({
            where : {
                id : id
            }
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    
    static formRestock(req, res){
        const {errors} = req.query
        res.render('restock', {errors})
    }

    static restock (req, res){
        const stock = req.body.stock
        const id = req.params.id
        Product.update({stock : stock},{
            where : {
                id : id
            }
        })
        .then(() => {
            res.redirect('/admin')
        })
        .catch(err => {
            const errors = err.errors.map(el => {
                return el.message
            })

            if(err.name === "SequelizeValidationError"){
                res.redirect(`/admin/${id}/restock?errors=${errors}`)
            }else{
                res.send(err)
            }
        })
    }
}

module.exports = pageAdminController