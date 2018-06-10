'use strict';


var errors = require('common-errors'),
    logger = require('../helpers/logger');

var DEFAULT_NAME = 'ServerError';
var DEFAULT_MESSAGE = 'Internal server error';

/**
 * The error middleware
 *
 * @param  {Object}       err         the error object
 * @param  {Object}       req         express request instance
 * @param  {Object}       res         express response instance
 * @param  {Function}     next        next middleware function in the chain
 */
var _middleware = function(err, req, res, next) {
  // if the error is not defined
  if(!err) {
    if(next) {
      return next();
    } else {
      return res.end();
    }
  }
  logger.error('Error while processing request', err);
  if(err instanceof Error) {
    var httpError = new errors.HttpStatusError(err);
    if(err.statusCode >= 500) {
      httpError.message = DEFAULT_MESSAGE;
    }
    res.status(httpError.statusCode).json({ code: httpError.statusCode, name: err.name || DEFAULT_NAME, message: httpError.message || DEFAULT_MESSAGE });
  }
};

/**
 * Export a function
 * @return {Function}       return the middleware function
 */
module.exports = function() {
  return _middleware;
};