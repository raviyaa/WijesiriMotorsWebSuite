
'use strict';

var wijesirimotorsschemas = require('wijesirimotorsschemas');
var moment = require('moment');
var config = require('../../config/config');
var db = require('../../datasource').getDb(config.MONGODB_URL, config.POOL_SIZE);

var VehicleSchema = wijesirimotorsschemas.VehicleSchemas.VehicleSchema;
var Vehicle = db.model('Vehicle', VehicleSchema);

var utils = require('../../helpers/utils');
var logger = require('../../helpers/logger');
var serviceHelper = require('../serviceHelper');
var errors = require('common-errors'),
    moment = require('moment'),
    _ = require('lodash'),
    bcrypt = require('bcryptjs'),
    jwt = require('jwt-simple'),
    async = require('async'),
    httpStatus = require('http-status');


function addVehicle(newVehicle, callback) {
    newVehicle.createdAt = new Date();
    serviceHelper.createModel(Vehicle, 'Vehicle', newVehicle, callback);
}

function getListOfVehicles(callback) {
    serviceHelper.queryModel(Vehicle, { 'isDelete': false }, { __v: false }, callback);
}



module.exports = {
    addVehicle: addVehicle,
    getListOfVehicles: getListOfVehicles
}