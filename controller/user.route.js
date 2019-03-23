const express = require('express')
const route = express.Router()


route.get('/register',(req,res)=>{
    res.render('register');
})

module.exports = route