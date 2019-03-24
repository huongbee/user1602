const express = require('express')
const route = express.Router()
const {verify} = require('../lib/jwt')
const User = require('../model/User')
const {checkLogin} = require('../lib/checklogin')

route.get('/',checkLogin,(req,res)=>{
    const userId = res.locals.userId
    console.log(userId)
    User.findById(userId)
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