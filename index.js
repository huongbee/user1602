const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./controller/user.route')
require('./lib/dbconnect')
const app = express();

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/user',userRouter)

app.listen(3000,()=>{console.log('Server started!')})