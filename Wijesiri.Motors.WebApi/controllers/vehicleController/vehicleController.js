'use strict';

var async = require('async'),
    httpStatus = require('http-status'),
    errors = require('common-errors'),
    _ = require('lodash');

var config = require('../../config/config');
var utils = require('../../helpers/utils'),
    logger = require('../../helpers/logger'),
    vehicleService = require('../../services/vehicleService/vehicleService');


function addVehicle(req, res) {
    async.waterfall([
        function (callback) {
            vehicleService.addVehicle(req.body, callback);
        }
    ], function (err, result) {
        utils.processResponse(err, result, res);
    });
}

function getListOfVehicles(req, res) {
    async.waterfall([
        function (callback) {
            vehicleService.getListOfVehicles(callback);
        }
    ], function (err, result) {
        utils.processResponse(err, result, res);
    });
}


module.exports = {
    addVehicle: addVehicle,
    getListOfVehicles: getListOfVehicles
};