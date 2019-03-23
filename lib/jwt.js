const jwt = require('jsonwebtoken')
const SECRET_KEY = 'chuoibaomatnaodo'

function sign(obj){
    return new Promise((resolve, reject)=>{
        jwt.sign(obj, SECRET_KEY, {expiresIn: 60*60},(err,encoded)=>{
            if(err) return reject(err)
            return resolve(encoded)
        })
    }) 
}
function verify(token){
    return new Promise((resolve, reject)=>{
        jwt.verify(token,SECRET_KEY,{expiresIn: 60*60},(err,obj)=>{
            if(err) return reject(err.message)
            delete obj.exp
            delete obj.iat
            return resolve(obj)
        })
    })
}
module.exports = { sign, verify}