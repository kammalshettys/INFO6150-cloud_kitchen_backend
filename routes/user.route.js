const express = require('express');
const Users = require('../model/user.model');
const UserController = require('../controller/userController')
const route = express.Router();
const User = require('../model/user.model');


route.post('/create',[UserController.createUser]);
route.get('/sampleAPI',[UserController.sampleAPI]);


module.exports = route;