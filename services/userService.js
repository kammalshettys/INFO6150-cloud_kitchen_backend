const UserModels = require('../model/user.model');
var bcrypt = require('bcryptjs');
var encrypt = require('./en_decrpt');
var MESSAGE = require('../constant/Message');
const validate = require ('./validations');
var userService = {}

userService.createUser = async function(user,func){
    const valid = validate.validateData(user);
    const isDublicate = await UserModels.findOne({email:user.email});
    if(isDublicate){
        func(validate.ErrorObj(MESSAGE.EMAIL_ALREADY_PRESENT,false),null);
        return;
    }
    if(valid.error){
        func(validate.ErrorObj(valid.error.message,true),null);
        return;
    }
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hash(user.password,salt);
        user.password = hash;
        user.save((err,result)=>{
            if(err){
                func(err,null);
            }
            else{
                func(null,'successfully saved');
            }
        })
    }




    module.exports = userService;