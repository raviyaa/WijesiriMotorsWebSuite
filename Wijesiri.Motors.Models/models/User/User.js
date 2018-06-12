'use strict';

var mongoose = require('../../datasource').getMongoose(),
    Schema = mongoose.Schema;



var UserSchema = new Schema({

    firstName: { type: String, required: false },
	lastName: { type: String, required: false },
    description: { type: String, required: false },
role: { type: String, required: false },
address: { type: String, required: false },
	 tp: { type: Number, default: false },
    isDelete: { type: Boolean, default: false },
    createdAt: { type: Date,  required: false },
    modifiedAt: { type: Date,  required: false },
modules:{type: Schema.Types.Mixed, required: false }

});


// module exports
module.exports = {
    UserSchema: UserSchema

};

