/* eslint-disable strict */
//'use strict';

var errors = require('common-errors');
var httpStatus = require('http-status');
var utils = require('../helpers/utils');
var logger = require('../helpers/logger');

/**
 * This method is responsible for creating new Model instance in
 * mongoDB
 *
 * @param   {Object}   model      mongoose model object
 * @param   {String}   modelName  name of mongoose model
 * @param   {Object}   modelData  newly to be created mongoose model data
 * @param   {Function} callback   asynchornous callback invoked upon method completion
 */
function createModel(model, modelName, modelData, callback) {
    logger.debug('Creating new Model : %s', modelName);
    var modelObj = model(modelData);
    modelObj.save(function (err, newModelObj) {
        if (err) {
            logger.error('Error adding new %s ! Error : %s', modelName, JSON.stringify(err));
            callback(utils.handleMongodbError(err), null);
        } else {
            logger.info('New Model of type : %s created with id : %s', modelName, JSON.stringify(newModelObj._id));
            var result = {};
            result.status = httpStatus.OK;
            result.result = newModelObj._id;
            callback(null, result);

        }
    });
}

/**
 * This method is responsible for updating Model instance in
 * mongoDB identified by modelId
 *
 * @param   {Object}   model      mongoose model object
 * @param   {String}   modelName  name of mongoose model
 * @param   {String}   modelId    unique identifier for mongo document
 * @param   {Object}   modelObj   to be updated mongoose model data
 * @param   {Function} callback   asynchornous callback invoked upon method completion
 */
function updateModelById(model, modelName, modelId, modelObj, callback) {
    logger.debug('Updating Model : %s by Model Id : %s', modelName, modelId);
    model.findByIdAndUpdate(modelId, modelObj, function (err, updatedModelObj) {
        if (err) {
            logger.error('Error while updating Model: %s ,ModelId : %s, Error : %s', modelName, modelId, JSON.stringify(
                err));
            callback(utils.handleMongodbError(err), null);
        } else if (updatedModelObj) {
            logger.info('Model : %s by Model Id : %s updated successfully', modelName, modelId);

            var result = {};
            result.status = httpStatus.OK;
            result.result = updatedModelObj._id;
            callback(null, result);
        } else {
            logger.debug('Model : %s by Model Id : %s not found for update', modelName, modelId);
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No ' + modelName + ' found with id : ' + modelId),
                null);
        }
    });
}

/**
 * This method is responsible for updating only specified fields Model  instance in
 * mongoDB identified by modelId
 *
 * @param   {Object}   model      mongoose model object
 * @param   {String}   modelName  name of mongoose model
 * @param   {String}   criteria    search criteria
 * @param   {Object}   modelObj   to be updated mongoose model data
 * @param   {Function} callback   asynchornous callback invoked upon method completion
 */
function updateModelByCriteria(model, modelName, criteria, modelObj, callback) {
    logger.debug('Updating Model : %s by Model Id : %s', modelName, "");
    model.update(criteria, modelObj, function (err, updatedModelObj) {
        if (err) {
            logger.error('Error while updating Model: %s ,ModelId : %s, Error : %s', modelName, "", JSON.stringify(
                err));
            callback(utils.handleMongodbError(err), null);
        } else if (updatedModelObj) {
            logger.info('Model : %s by Model Id : %s updated successfully', modelName, "");

            var result = {};
            result.status = httpStatus.OK;
            result.result = updatedModelObj._id;
            console.log("check obh");
            console.log(updatedModelObj);
            console.log(result);
            callback(null, result);
        } else {
            logger.debug('Model : %s by Model Id : %s not found for update', modelName, "");
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No ' + modelName + ' found with id : ' + ""),
                null);
        }
    });
}


/**
 * This method is responsible for finding Model instance in
 * mongoDB identified by modelId
 *
 * @param   {Object}   model      mongoose model object
 * @param   {String}   modelName  name of mongoose model
 * @param   {String}   modelId    unique identifier for mongo document
 * @param   {Object}   fields     list of fields to be fetched from document
 * @param   {Function} callback   asynchornous callback invoked upon method completion
 */
function findModelById(model, modelName, modelId, fields, callback) {
    logger.debug('Finding Model : %s by Model Id : %s', modelName, modelId);
    model.findById(modelId, fields, function (err, modelObj) {
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObj) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObj;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No ' + modelName + ' found with id : ' + modelId),
                null);
        }
    });
}

/**
 * This method is responsible for querying Model instances in
 * mongoDB identified by criteria and paginationParam
 *
 * @param   {Object}   model            mongoose model object
 * @param   {Object}   criteria         criteria by which documents are queried
 * @param   {Object}   fields           list of fields to be fetched from document
 * @param   {Object}   paginationParam  pagination related params eg.skip,limit
 * @param   {Function} callback         asynchornous callback invoked upon method completion
 */
function queryModelByCriteria(model, criteria, fields, paginationParam, callback) {
    model.find(criteria, fields, paginationParam, function (err, modelObjs) {
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObjs) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObjs;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No records found for given criteria'),
                null);
        }
    });
}

/**
 * This method is responsible for querying Model instances in
 * mongoDB, all the data saved in schema will return
 *
 * @param   {Object}   model            mongoose model object
 * @param   {Object}   fields           list of fields to be fetched from document
 * @param   {Function} callback         asynchornous callback invoked upon method completion
 */
function queryModel(model,criteria, fields, callback) {
    model.find(criteria, fields).lean().exec(function (err, modelObjs) {
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObjs) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObjs;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No records found for given criteria'),
                null);
        }
    });
}


/**
 * This method is responsible for querying Model instances in
 * mongoDB, all the data saved in schema will return
 *
 * @param   {Object}   model            mongoose model object
 * @param   {Object}   fields           list of fields to be fetched from document
 * @param   {Function} callback         asynchornous callback invoked upon method completion
 */
function queryModelFindOne(model,criteria, fields, callback) {
    model.findOne(criteria, fields).lean().exec( function (err, modelObjs) {
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObjs) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObjs;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No records found for given criteria'),
                null);
        }
    });
}


/**
 * This method is responsible for querying Model instances in
 * mongoDB, all the data saved in schema will return
 *
 * @param model             mongoose model object
 * @param modelName         name of mongoose model
 * @param criteria          search criteria
 * @param fields            list of fields to be fetched from document
 * @param populateQuery     populate quary
 * @param callback          asynchornous callback invoked upon method completion
 */
function queryModelFindOneWithPopulation(model, modelName, criteria, fields, populateQuery, callback) {
    logger.debug('Finding Model : %s by Model Id : %s', modelName, criteria);

    model.findOne(criteria, fields).populate(populateQuery).exec(function (err, modelObjs) {
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObjs) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObjs;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No records found for given criteria'),
                null);
        }
    });
}


/**
 * This method is responsible for deleting Model instance in
 * mongoDB identified by modelId
 *
 * @param   {Object}   model      mongoose model object
 * @param   {String}   modelName  name of mongoose model
 * @param   {String}   modelId    unique identifier for mongo document
 * @param   {Function} callback   asynchornous callback invoked upon method completion
 */
function deleteModelById(model, modelName, modelId, callback) {
    logger.debug('Deleting Model : %s by Model Id : %s', modelName, modelId);
    model.findByIdAndRemove(modelId, function (err, result) {
        if (err) {
            logger.error('Error deleting Model : %s by Model Id : %s, Error: %s', modelName, modelId, JSON.stringify(
                err));
            callback(utils.handleMongodbError(err), null);
        } else if (!result) {
            logger.debug('Model: %s with ModelId: %s not found for deleting', modelName, modelId);
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No ' + modelName + ' found with id : ' + modelId),
                null);
        } else {
            logger.info('Model: %s with ModelId: %s deleted successfully', modelName, modelId);
            callback(null, {
                message: modelName + 'deleted successfully'
            });
        }
    });
}
/**
 * This method is responsible for querying Model instances in
 * mongoDB, all the data saved in schema will return
 *
 * @param model             mongoose model object
 * @param modelName         name of mongoose model
 * @param criteria          search criteria
 * @param fields            list of fields to be fetched from document
 * @param populateQuery     populate quary
 * @param callback          asynchornous callback invoked upon method completion
 */

function queryModelWithPopulation(model, modelName, criteria, fields, populateQuery, callback) {
    logger.debug('Finding Model : %s by Model Id : %s', modelName, criteria);

    model.find(criteria, fields).populate(populateQuery).lean().exec(function (err, modelObjs) {
        
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObjs) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObjs;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No records found for given criteria'),
                null);
        }
    });
}

/**
 * This method is responsible for querying Model instances in
 * mongoDB, all the data saved in schema will return
 *
 * @param model             mongoose model object
 * @param modelName         name of mongoose model
 * @param criteria          search criteria
 * @param fields            list of fields to be fetched from document
 * @param populateQuery     populate quary
 * @param callback          asynchornous callback invoked upon method completion
 */

function queryModelWithPopulationAndSort(model, modelName, criteria, fields, sortQuery, populateQuery,  callback) {
    logger.debug('Finding Model : %s by Model Id : %s', modelName, criteria);

    model.find(criteria, fields).populate(populateQuery).sort(sortQuery).lean().exec(function (err, modelObjs) {
        
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObjs) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObjs;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No records found for given criteria'),
                null);
        }
    });
}

/**
 * This method is responsible for get the data count of model with given criteria
 * @param model         mongoose model object
 * @param modelName     name of mongoose model
 * @param criteria      search criteria
 * @param callback      asynchornous callback invoked upon method completion
 */
function getNextUniqueId(model,modelName,criteria,callback){
    //{ name: 'reservationId' }
    logger.debug('Get NextUniqueId :  %s', modelName);
    model.findOneAndUpdate(criteria, { $inc: { value: 1 } }, {upsert: true,returnOriginal:false}, function (err, data) {
        if (err) {
                    callback(utils.handleMongodbError(err), null);
                } else if (data) {
        
                    callback(null, data.value);
                } else {
                    callback(null, 0);
                }
      });

}

/**
 * This method is responsible for get sum of given column of model with given criteria
 * @param model         mongoose model object
 * @param modelName     name of mongoose model
 * @param criteria      search criteria
 * @param resultCriteria      result criteria
 * @param callback      asynchornous callback invoked upon method completion
 */
function getSumOfGivenColumnWithCriteria(model,modelName,criteria, resultCriteria, callback){

    logger.debug('Get Sum Model :  %s', modelName);
    var quary = [{ $match:criteria},{ $group: resultCriteria }];
    console.log(quary);


    model.aggregate(quary, function (err, result) {

        console.log(err);
        console.log(result);
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else  {

            callback(null, result);
        }
    });

}

/**
 * This method is responsible for get sum of given column of model with given criteria
 * @param model         mongoose model object
 * @param modelName     name of mongoose model
 * @param criteria      search criteria
 * @param resultCriteria      result criteria
 * @param callback      asynchornous callback invoked upon method completion
 */
/** 
function queryModelWithAggregateCriteria(model,modelName,criteria, resultCriteria, callback){
    
        logger.debug('Get Sum Model :  %s', modelName);
        var quary = [{ $match:criteria},{ $group: resultCriteria }];

        model.aggregate(quary, function (err, result) {
            console.log(err);
            console.log(result);
            if (err) {
                callback(utils.handleMongodbError(err), null);
            } else  {
                callback(null, result);
            }
        });
    }
*/

/**
 * This method is responsible for updating Model instance in
 * mongoDB identified by modelId
 *
 * @param   {Object}   model      mongoose model object
 * @param   {String}   modelName  name of mongoose model
 * @param   {String}   modelId    unique identifier for mongo document
 * @param   {String}   criteria    unique identifier for mongo document
 * @param   {String}   parameterPath    unique identifier for mongo document
 * @param   {Object}   modelObj   to be updated mongoose model data
 * @param   {Function} callback   asynchornous callback invoked upon method completion
 */
function appendModelByPush(model, modelName, criteria , modelObj, callback) {
    logger.debug('Updating Model : %s by Model Id : %s', modelName);
    console.log(modelObj);
    model.update(criteria, {$push:modelObj}, function (err, updatedModelObj) {
        if (err) {
            logger.error('Error while append Model: %s ,ModelId : %s, Error : %s', modelName, "", JSON.stringify(
                err));
            callback(utils.handleMongodbError(err), null);
        } else if (updatedModelObj) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = updatedModelObj;
            callback(null, result);
        } else {
            logger.debug('Model : %s by Model Id : %s not found for update', modelName, "");
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No ' + modelName + ' found with id : ' + modelId),
                null);
        }
    });
}


/**
 * This method is responsible for removing property from an array
 * mongoDB identified by modelId
 *
 * @param   {Object}   model      mongoose model object
 * @param   {String}   modelName  name of mongoose model
 * @param   {String}   modelId    unique identifier for mongo document
 * @param   {String}   criteria    unique identifier for mongo document
 * @param   {Object}   modelObj   to be removed mongoose subdocument identifier
 * @param   {Function} callback   asynchornous callback invoked upon method completion
 */
function removeSubDocumentElement(model, modelName, criteria , modelObj, callback) {
    logger.debug('Updating Model : %s by Model Id : %s', modelName);
    console.log(modelObj);
    model.update(criteria, {'$pull': modelObj  }, function (err, updatedModelObj) {
        if (err) {
            logger.error('Error while append Model: %s ,ModelId : %s, Error : %s', modelName, "", JSON.stringify(
                err));
            callback(utils.handleMongodbError(err), null);
        } else if (updatedModelObj) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = updatedModelObj;
            callback(null, result);
        } else {
            logger.debug('Model : %s by Model Id : %s not found for update', modelName, "");
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No ' + modelName + ' found with id : ' + modelId),
                null);
        }
    });
}

/**
 * This method is responsible for querying Model instances in
 * mongoDB, all the data saved in schema will return
 *
 * @param model             mongoose model object
 * @param modelName         name of mongoose model
 * @param criteria          search criteria
 * @param fields            list of fields to be fetched from document
 * @param populateQuery     populate quary
 * @param callback          asynchornous callback invoked upon method completion
 */
function queryModelWithPagination(model, modelName, criteria, fields,page, perPage, populateQuery, callback) {
    //console.log(criteria);
    logger.debug('Finding Model : %s by Model Id : %s', modelName, criteria);
    //model.find(criteria, fields).populate(populateQuery).skip((page - 1) * perPage).limit(perPage).exec(function (err, modelObjs) {
    model.find(criteria, fields).populate(populateQuery).skip((page - 1) * perPage).limit(perPage).lean().exec(function (err, modelObjs) {
        if (err) {
            callback(utils.handleMongodbError(err), null);
        } else if (modelObjs) {
            var result = {};
            result.status = httpStatus.OK;
            result.result = modelObjs;
            callback(null, result);
        } else {
            callback(new errors.HttpStatusError(httpStatus.NOT_FOUND, 'No records found for given criteria'),
                null);
        }
    });
}









module.exports = {
    createModel: createModel,
    updateModelById: updateModelById,
    findModelById: findModelById,
    queryModelByCriteria: queryModelByCriteria,
    deleteModelById: deleteModelById,
    queryModel: queryModel,
    queryModelWithPopulation:queryModelWithPopulation,
    getNextUniqueId:getNextUniqueId,
    updateModelByCriteria:updateModelByCriteria,
    appendModelByPush:appendModelByPush,
    getSumOfGivenColumnWithCriteria:getSumOfGivenColumnWithCriteria,
    queryModelFindOne:queryModelFindOne,
    queryModelFindOneWithPopulation:queryModelFindOneWithPopulation,
    removeSubDocumentElement: removeSubDocumentElement,
    queryModelWithPagination: queryModelWithPagination,
    queryModelWithPopulationAndSort: queryModelWithPopulationAndSort
    

};
