const UserService= require('../services/userService');
const UserModels = require('../model/user.model');

var userController = {};

userController.createUser = function (req,res){
    let user = new UserModels({
        name:req.body.name,
        email:req.body.email,
        password: req.body.password
    })
    UserService.createUser(user,(error,success)=>{
        if(error){
            return res.status(500).json({isSuccess:false,error:error})
        }
        else{
            return res.status(200).json({isSuccess:true,data:{message:success}})
        }

    })
}

userController.sampleAPI = function(req,res){
    return res.status(200).json({data:"awesome project"})
}


module.exports = userController;