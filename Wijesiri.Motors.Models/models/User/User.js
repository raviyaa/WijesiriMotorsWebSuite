'use strict';

var mongoose = require('../../datasource').getMongoose(),
    Schema = mongoose.Schema;



var UserSchema = new Schema({

    fName: { type: String, required: false },
	fLname: { type: String, required: false },
    description: { type: String, required: false },
	 tp: { type: Number, default: false },
    isDelete: { type: Boolean, default: false },
    createdAt: { type: Date,  required: false },
    modifiedAt: { type: Date,  required: false },

});


// module exports
module.exports = {
    UserSchema: UserSchema

};

