
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
var errors = require('common-errors'),
    moment = require('moment'),
    _ = require('lodash'),
    bcrypt = require('bcryptjs'),
    jwt = require('jwt-simple'),
    async = require('async'),
    httpStatus = require('http-status');


function addUser(newUser, callback) {
    serviceHelper.createModel(User, 'User', newUser, callback);
}

function getListOfUsers(callback) {
    serviceHelper.queryModel(User, { 'isDelete': false }, { __v: false }, callback);
}

function login(criteria, callback) {
    criteria.isDelete = false;
    serviceHelper.queryModel(User, criteria, { __v: false }, callback);
}

/* function login (credentials, callback) {
    async.waterfall([
      function(cb) {
        // queryModelFindOne
        serviceHelper.queryModelFindOneWithPopulation(User,'AUT_User', { username: credentials.username,isConfirm: true,isDelete:false},{__v:false},
        [{path: 'userRole', model: 'AUT_UserRole'}], function(err, user){
          if(err){
            cb(new errors.HttpStatusError(httpStatus.UNAUTHORIZED,err));
          }
          cb(null, user);
        });
      },
      function (user, cb) {
        if (!user.result ) {
          return cb(new errors.HttpStatusError(httpStatus.UNAUTHORIZED, 'Invalid username or password'));
        }
        cb(null, user.result);
      },
      function (user, cb) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);    
        var valid = bcrypt.compareSync(credentials.password, hash);
        if (valid) {
          user.password = undefined;
          cb(null, user);
        } else {
          return  cb(new errors.HttpStatusError(httpStatus.UNAUTHORIZED, 'Invalid username or password'));
        }
      },
      function(user, cb) {
        serviceHelper.queryModel(AUT_RolePermission, { role: user.userRole },{__v:false}, function(err, rolePermission){
          if (err) {         
            cb(new errors.HttpStatusError(httpStatus.UNAUTHORIZED,err));
          }
  
          user.rolePermission = rolePermission.result;
          var millis = moment().valueOf() + config.TOKEN_EXPIRATION_IN_MILLIS;
          var payload={
            // expiration: millis,
            userId: user._id
          }        
          var token = jwt.encode(payload, config.JWT_SECRET);
          cb(null, {token: token, user: user});
        });
  
      },
    ], callback);
  };

 */

module.exports = {
    addUser: addUser,
    getListOfUsers: getListOfUsers,
    login: login
}