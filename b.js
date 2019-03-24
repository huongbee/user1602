// const jwt = require('jsonwebtoken')
// const SECRET_KEY = 'chuoibaomatnaodo'
// //create token
// let user = {
//     _id: "5c95ee5f5422e01b51b4f245"
// }
// // jwt.sign(user, SECRET_KEY, {expiresIn: 120},(err,encoded)=>{
// //     if(err){
// //         console.log(err)
// //     }
// //     else{
// //         console.log(encoded)
// //         //
// //     }
// // }) // 2min

// //check token

// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk1ZWU1ZjU0MjJlMDFiNTFiNGYyNDUiLCJpYXQiOjE1NTMzMzI0MTgsImV4cCI6MTU1MzMzMjUzOH0.DigpXAeimk1NaqxmSXBvHcjDbQ7aQfUQlP6Qs1720_Y'
// jwt.verify(token,SECRET_KEY,{expiresIn: 120},(err,obj)=>{
//     if(err){
//         console.log(err.message)
//     }
//     else{
//         return (obj)
//     }
// })

const {sign, verify} = require('./lib/jwt')
sign({_id: "5c95ee5f5422e01b51b4f245",email:'aaaa'})
.then(r=>{
    console.log(r)
    return verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTMzOTczNzUsImV4cCI6MTU1MzQwMDk3NX0.DsZ43mGh4WvOIfObBrfZ7UDoR9kpzvfUA7aXb8ozIKk')
})
.then(u=>console.log(u))


