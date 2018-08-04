'use strict';

var async = require('async'),
    httpStatus = require('http-status'),
    errors = require('common-errors'),
    _ = require('lodash');

var config = require('../../config/config');
var utils = require('../../helpers/utils'),
    logger = require('../../helpers/logger'),
    userService = require('../../services/userService/userService');


function addUser(req, res) {
    async.waterfall([
        function (callback) {
            userService.addUser(req.body, callback);
        }
    ], function (err, result) {
        utils.processResponse(err, result, res);
    });
}

function getListOfUsers(req, res) {
    async.waterfall([
        function (callback) {
            userService.getListOfUsers(callback);
        }
    ], function (err, result) {
        utils.processResponse(err, result, res);
    });
}

function login(req, res) {
    async.waterfall([
        function (callback) {
            var criteria = {
                email: req.body.email
            }
            userService.login(criteria, callback);
        }
    ], function (err, result) {
        utils.processResponse(err, result, res);
    });
}

/* function login(req, res, next) {

    var credentials = _.pick(req.body, 'username', 'password');

    userService.login(credentials, function (err, result) {
        if (err) {
            return next(err);
        }
        req.data = {
            statusCode: httpStatus.OK,
            content: result
        };
        next();
    });
};
 */
module.exports = {
    addUser: addUser,
    getListOfUsers: getListOfUsers,
    login: login
};