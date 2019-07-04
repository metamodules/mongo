// @flow

const crypto = require('crypto')
let MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD
if (!MONGO_INITDB_ROOT_PASSWORD) {
  const buf = Buffer.alloc(10)
  MONGO_INITDB_ROOT_PASSWORD = crypto.randomFillSync(buf).toString('hex')
}

module.exports = {
  MONGO_SERVICE_HOST: process.env.MONGO_SERVICE_HOST || 'mongo',
  MONGO_SERVICE_PORT: process.env.MONGO_SERVICE_PORT || 27017,
  MONGO_INITDB_ROOT_USERNAME: process.env.MONGO_INITDB_ROOT_USERNAME || 'admin',
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE: process.env.MONGO_INITDB_DATABASE || 'mongo'
}
