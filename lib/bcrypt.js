const bcrypt = require('bcrypt')

function hash(password){
    return new Promise((resolve, reject)=>{
        bcrypt.hash(password,8)
        .then(hash=>resolve(hash))
        .catch(err=>reject(err.message))
    })
}

async function compare(password, hash){
    return await bcrypt.compare(password,hash)
}
module.exports = { hash, compare }