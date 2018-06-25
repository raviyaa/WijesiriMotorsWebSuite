'use strict'

var user = require('./User'),
    UserSchema = user.UserSchema;

	var userType = require('./UserType'),
    UserTypeSchema = userType.UserTypeSchema;


	

module.exports = {
    UserSchema: UserSchema,
	UserTypeSchema:UserTypeSchema
};