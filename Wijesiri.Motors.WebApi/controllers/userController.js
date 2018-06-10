'use strict';

var async = require('async'),
    httpStatus = require('http-status'),
    errors = require('common-errors'),
    _ = require('lodash'),
    moment = require('moment'),
    momenttz = require('moment-timezone'),
    mongoose = require('mongoose');

var config = require('../config/config');
var utils = require('../helpers/utils'),
    logger = require('../helpers/logger'),
    userService = require('../services/userService/userService');


function addUser(req, res) {
    async.waterfall([
        function (callback) {
            console.log(req.body);
            userService.addUser(req.body, callback);
        }
    ], function (err, result) {
        utils.processResponse(err, result, res);
    });
}

module.exports = {
    addUser: addUser
};