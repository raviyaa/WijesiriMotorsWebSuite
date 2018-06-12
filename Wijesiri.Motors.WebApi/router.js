'use strict';

var express = require('express');


var userController = require('./controllers/userController');

module.exports = function () {

    var options = {
        caseSensitive: true
    };

    var router = express.Router(options);

    router.post('/addUser', userController.addUser);
    router.get('/getListOfUsers', userController.getListOfUsers);
    router.post('/login', userController.login);

    return router;
};


