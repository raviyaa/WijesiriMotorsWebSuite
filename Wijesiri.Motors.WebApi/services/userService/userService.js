
'use strict';

var wijesirimotorsschemas = require('wijesirimotorsschemas');
var moment = require('moment');
var config = require('../../config/config');
var db = require('../../datasource').getDb(config.MONGODB_URL, config.POOL_SIZE);

var UserSchema = wijesirimotorsschemas.UserSchemas.UserSchema;
var User = db.model('User', UserSchema);

var utils = require('../../helpers/utils');
var logger = require('../../helpers/logger');
var serviceHelper = require('../serviceHelper');
var errors = require('common-errors');

function addUser(newUser, callback) {
    serviceHelper.createModel(User, 'User', newUser, callback);
}

module.exports = {
    addUser: addUser
}