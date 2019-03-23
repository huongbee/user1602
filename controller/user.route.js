const express = require('express')
const { hash, compare } = require('../lib/bcrypt')
const route = express.Router()


route.get('/register',(req,res)=>{
    res.render('register');
})
route.post('/register',(req,res)=>{
    const { email, password, password_comfirmation } = req.body
    if(password !==password_comfirmation){
        
    }
})

module.exports = route