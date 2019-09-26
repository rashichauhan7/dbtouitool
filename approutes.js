'use strict';

module.exports = function (app) {

  // collection routes
  const collection = require('./services/collection.service.server');
  app.route('/api/collection')
    .post(collection.createCollection);
  app.route('/api/collection/:collectionName')
    .get(collection.readCollection)
    .put(collection.updateCollection)
    .delete(collection.deleteCollection);

  // const services = require('./server.services')
  // app.get('/api/collection/:collection/:cid', services.getCollectionEntryById);

};