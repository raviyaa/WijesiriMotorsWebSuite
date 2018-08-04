'use strict';

var mongoose = require('../../datasource').getMongoose(),
    Schema = mongoose.Schema;



var VehicleSchema = new Schema({

    regNo: { type: String, required: true },
	make: { type: String, required: true },
    model: { type: String, required: true },
	type: { type: String, required: true },
	year: { type: Number, required: false },
	isDelete: { type: Boolean, default: false },
    createdAt: { type: Date,  required: false },
    modifiedAt: { type: Date,  required: false }

});

module.exports = {
    VehicleSchema: VehicleSchema

};

