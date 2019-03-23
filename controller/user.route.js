const express = require('express')
const { hash, compare } = require('../lib/bcrypt')
const UserModel = require('../model/User')
const route = express.Router()


route.get('/register',(req,res)=>{
    res.render('register');
})
route.post('/register',(req,res)=>{
    const { email, password, password_comfirmation } = req.body
    if(!email || email==''){
        req.flash('error_message','Please enter email')
        return res.redirect('/user/register')
    }
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
route.post('/login',(req,res)=>{
    const { email , password } = req.body
    //find user by email
    UserModel.findOne({email})
    .then(user=>{
        if(!user){
            req.flash('error_message','Cannot find user 1')
            return res.redirect('/user/login')
        }
        else{
            // compare password
            compare(password,user.password)
            .then(result=>{
                if(result){
                    // login in success
                    // jwt 
                       
                    // save cookie
                    res.send(user)
                }
                else{
                    req.flash('error_message','Password invalid!')
                    return res.redirect('/user/login')
                }
            })            
        }
    })
    .catch((err)=>{
        console.log(err)
        req.flash('error_message','Cannot find user 2')
        return res.redirect('/user/login')
    })
})
module.exports = route