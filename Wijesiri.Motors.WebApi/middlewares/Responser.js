
'use strict';


var httpStatus = require('http-status'),
    winston = require('winston');
  
var TEST_ENV = 'test';

/**
 * The middleware function
 *
 * @param  {Object}       req         express request instance
 * @param  {Object}       res         express response instance
 * @param  {Function}     next        next middleware function in the chain
 */
var _middleware = function(req, res, next) {
  if(!req.data) {
    if(next) {
      return next();
    } else {
      res.end();
    }
  }
  // log the response if environment is not test and debug is set to true
  if(process.env.NODE_ENV !== TEST_ENV && process.env.DEBUG) {
    winston.info('Exiting from responser', req.data);
  }
  var statusCode = req.data.statusCode || httpStatus.OK;
  if(req.data.content) {
    res.status(statusCode).json(req.data.content);
  } else {
    res.status(req.data.statusCode || httpStatus.NO_CONTENT).send();
  }
};

// module export a function
module.exports = function() {
  return _middleware;
};