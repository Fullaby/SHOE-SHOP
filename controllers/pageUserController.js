const {Category, Product, Order, User} = require('../models')
const {formatRp, formatDate, convertToID} = require('../helpers/converter') 
const { Op } = require('sequelize')

class pageUserController {

    static home (req, res){
        const {search} = req.query
        let where = {}

        if(search){
            where = {
                name : {
                    [Op.iLike] : `${search}%`
                }
            }
        }

        Product.findAll({
            include : [Category, Order],
            where 
        })
        .then(data => {
            // res.send(data)
            res.render('home', {data, formatRp, formatDate})
        })
        .catch(err => res.send(err))
    }

    static buy (req, res){
        const ProductId = req.params.id
        const UserId = req.session.userId
        Order.create({ProductId, UserId})
        .then(()=>{
            res.redirect('/home')
        })
        .catch(err => res.send(err))
    }

    static checkout(req, res){
       Order.findAll({
        include : [Product, User]
       })
       .then(data => {
         res.render('checkout', {data, formatRp})
       })
       .catch(err => {
        res.send(err)
       })
    }
}

module.exports = pageUserController