const mongoose = require('mongoose')


if(process.env.NODE_ENV === 'production'){
    mongoose.connect('mongodb+srv://huong:123@123@cluster0-ehmwt.mongodb.net/user1602?retryWrites=true',{
        useNewUrlParser:true,
        useCreateIndex:true
    })
}else{
    mongoose.connect('mongodb://localhost/user1602',{
        useNewUrlParser:true,
        useCreateIndex:true
    })
}
mongoose.connection
.then(()=>console.log('DB connected!'))
.catch(err=>console.log(err))



// create project -> create user -> ip white list -> choose connection method: application