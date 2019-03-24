const fs = require('fs')
fs.unlink('d.js',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('File deleted!')
})

// fs.appendFile('d.js','datataaaaa',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('appened!')
// })
