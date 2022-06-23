const {User} =require('../models');
const bcrypt = require('bcryptjs');

class UserController{

    static registrasi(req,res){
        res.render('registerform')
    } 
   
    static postRegistrasi(req,res){
        const{username,email,password,role}= req.body
    
        User.create({username,email,password,role})
        .then(()=>{
            res.redirect('/login')
        })
        .catch((err)=>{
            res.send(err)
        })
    } 

    static login(req,res){
        let errors = req.query.error
        res.render('login', { errors })
    }

    static loginPost(req,res){
    const{username,password}=req.body
     User.findOne({where:{username}})
        .then(user=>{
            if(user){
                const isValidPassword= bcrypt.compareSync(password, user.password)
                if(isValidPassword){
                    req.session.userId = user.id
                    req.session.role = user.role
                    res.redirect('/home')
                }else{
                    const error= 'invalid username or password'
                    res.redirect(`/login?error=${error}`)
                }
            }else{
                const error= 'required username or password'
                    res.redirect(`/login?error=${error}`)
            }
        })

        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports= UserController