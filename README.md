# MongoDB Meta-Module ![CircleCI](https://img.shields.io/circleci/build/github/metamodules/mongo.svg) [![npm version](https://img.shields.io/npm/v/@metamodules/mongo.svg)](https://www.npmjs.com/package/@metamodules/mongo)

For use with [create-node-app](https://github.com/kubesail/create-node-app) and [deploy-node-app](https://github.com/kubesail/deploy-node-app)

To add this metamodule to your project:

```
npm install @metamodules/mongo
```

```js
// This "just works" both in development and production!
const mongo = require('@metamodules/mongo')().base

var kittySchema = new mongo.Schema({
  name: String
})

var Kitten = mongo.model('Kitten', kittySchema)

var fluffy = new Kitten({ name: 'fluffy' })
fluffy.save(function(err, fluffy) {
  if (err) return console.error(err)

  Kitten.find(function(err, kittens) {
    if (err) return console.error(err)
    console.log(kittens)
  })
})
```

This is a simple wrapper around the [mongoose](https://github.com/Automattic/mongoose) module and includes the latest stable MongoDB image. This module exposes an instances of a mongoose [Connection](https://mongoosejs.com/docs/api/connection.html#connection_Connection).
