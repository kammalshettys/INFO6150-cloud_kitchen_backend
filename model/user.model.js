const mogoose = require('mongoose');

const schema = mogoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
}) 

var Users = mogoose.model('User',schema);
module.exports = Users;