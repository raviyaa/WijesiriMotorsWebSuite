'use strict';

var express = require('express');


var userController = require('./controllers/userController/userController');
var vehicleController = require('./controllers/vehicleController/vehicleController');


module.exports = function () {

    var options = {
        caseSensitive: true
    };

    var router = express.Router(options);

    router.post('/addUser', userController.addUser);
    router.get('/getListOfUsers', userController.getListOfUsers);
    router.post('/login', userController.login);

    router.post('/addVehicle', vehicleController.addVehicle);
    router.get('/getListOfVehicles', vehicleController.getListOfVehicles);

    return router;
};


