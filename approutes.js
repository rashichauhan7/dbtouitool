'use strict';

module.exports = function (app) {

  // structure routes
  const structure = require('./services/structure.service.server')
  app.route('/api/_structure')
    .get(structure.getStructure);
  app.route('/api/_structure/:collectionName')
    .get(structure.getCollectionStructure);

  // collection routes - DDL queries
  const collection = require('./services/collection.service.server');
  app.route('/api/_collections')
    .post(collection.createCollection);
  app.route('/api/_collections/:collectionName')
    .get(collection.readCollection)
    .put(collection.updateCollection)
    .delete(collection.deleteCollection);

  // table routes - DML queries
  const entry = require('./services/entry.service.server');
  app.get('/api/:collectionName/:entryId', entry.getEntryById);
  app.route('/api/:collectionName')
    .get(entry.getEntries)
    .post(entry.createEntry)
    .put(entry.updateEntry)
    .delete(entry.deleteEntry);
};