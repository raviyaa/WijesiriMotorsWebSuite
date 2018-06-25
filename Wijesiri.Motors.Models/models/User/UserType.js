'use strict';

var mongoose = require('../../datasource').getMongoose(),
    Schema = mongoose.Schema;



var UserTypeSchema = new Schema({

    code: { type: String, required: false },
    description: { type: String, required: false },
	 sequence: { type: Number, default: false },
    isDelete: { type: Boolean, default: false },
    createdAt: { type: Date,  required: false },
    modifiedAt: { type: Date,  required: false }

});


// module exports
module.exports = {
    UserTypeSchema: UserTypeSchema

};

