const express = require('express')
const { hash, compare } = require('../lib/bcrypt')
const UserModel = require('../model/User')
const route = express.Router()


route.get('/register',(req,res)=>{
    res.render('register');
})
route.post('/register',(req,res)=>{
    const { email, password, password_comfirmation } = req.body
    if(password !==password_comfirmation){
        req.flash('error_message','Password confirmation not match')
        return res.redirect('/user/register')
    }
    //save user
    hash(password)
    .then(hash=>{
        return UserModel.create({
            email : email,
            password : hash
        })
    })
    .then(()=>{
        return res.redirect('/user/login')
    })
    .catch(()=>{
        req.flash('error_message','Cannot register account')
        return res.redirect('/user/register')
    })
})
route.get('/login',(req,res)=>{
    res.render('login');
})

module.exports = route