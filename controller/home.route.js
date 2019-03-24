const express = require('express')
const route = express.Router()
const {verify} = require('../lib/jwt')
const User = require('../model/User')

route.get('/',(req,res)=>{
    const token = req.cookies.token 
    if(!token){
        req.flash('error_message','Login first 1!')
        return res.redirect('/user/login')
    }
    //check token 
    verify(token)
    .then(user=>{
        //find user in db
        return User.findById(user.id)
    })
    .then(userInfo=>{
        if(!userInfo){
            req.flash('error_message','Login first 3!')
            return res.redirect('/user/login')
        }
        return res.render('home',{fullname:userInfo.fullname})
    })
    .catch(()=>{
        req.flash('error_message','Login first 2!')
        return res.redirect('/user/login')
    })
})

module.exports = route