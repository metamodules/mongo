// @flow

const mongoose = require('mongoose')

const {
  MONGO_SERVICE_HOST,
  MONGO_SERVICE_PORT,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE
} = require('./config')

const mongoHandles = {}

module.exports = function mongo(target /*: string */, forceNew /*: boolean */ = false) {
  if (!target) {
    target = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_SERVICE_HOST}:${MONGO_SERVICE_PORT}/${MONGO_INITDB_DATABASE}`
  }
  if (mongoHandles[target] && !forceNew) return mongoHandles[target]
  if (target.indexOf('mongodb://') !== 0) target = 'mongodb://' + target
  mongoHandles[target] = mongoose.createConnection(target, { useNewUrlParser: true })
  return mongoHandles[target]
}
