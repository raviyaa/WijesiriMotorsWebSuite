
'use strict';


// The mongoose instance.
var _mongoose = require('mongoose');
_mongoose.Promise = global.Promise;

// The database mapping.
var dbs = {};

/**
 * Gets a db connection for a URL.
 * @param     {String}    url         the url
 * @return    {object}                connection for the given URL
 */
function getDb(url, poolSize) {
  if (!dbs[url]) {
    var db = _mongoose.createConnection(url, {
      server: {
        poolSize: poolSize || 10
      }
    });
    dbs[url] = db;
  }
  return dbs[url];
}

/**
 * Sets the mongoose.
 * @param     {Object}    mongoose    the mongoose instance to set
 */
function setMongoose(mongoose) {
  _mongoose = mongoose;
}

/**
 * Gets the mongoose.
 * @return    {Object}                the mongoose instance
 */
function getMongoose() {
  return _mongoose;
}

// exports the functions
module.exports = {
  getDb : getDb,
  setMongoose : setMongoose,
  getMongoose : getMongoose
};