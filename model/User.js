const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    fullname: String,
    gender: String,
    birthdate: Date,
    phone: String
})
const User = mongoose.model('user',UserSchema)
module.exports = User