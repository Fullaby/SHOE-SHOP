const{Product, Order,User,Category,Profile} = require('../models');
const {Op}=require('sequelize');

class Controller{

    static home(req,res){
        res.render('landingpage')
    }

    static homes(req,res){
        res.render('home')
    }

}

module.exports= Controller