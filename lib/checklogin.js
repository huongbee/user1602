const { verify } = require('./jwt')

function checkLogin(req,res,next){
    const token = req.cookies.token 
    if(!token){
        req.flash('error_message','Login first 1!')
        return res.redirect('/user/login')
    }
    //check token 
    verify(token)
    .then(user=>{
        res.locals.userId = user.id // send userId for route
        next()
    })
    .catch(()=>{
        req.flash('error_message','Login first 2!')
        return res.redirect('/user/login')
    })
}
function redirectIfLoggedIn(req,res,next){
    const token = req.cookies.token 
    if(token) return res.redirect('/') // logged in
    next();
}
module.exports = {checkLogin, redirectIfLoggedIn}