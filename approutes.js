'use strict';

module.exports = function (app) {

  // structure routes
  const structure = require('./services/structure.service.server')
  app.route('/api/structure')
    .get(structure.getStructure);
  app.route('/api/structure/:collection')
    .get(structure.getCollectionStructure);

  // collection routes
  const collection = require('./services/collection.service.server');
  app.route('/api/collection')
    .post(collection.createCollection);
  app.route('/api/collection/:collectionName')
    .get(collection.readCollection)
    .put(collection.updateCollection)
    .delete(collection.deleteCollection);


  // table routes - DML queries
  const entry = require('./services/entry.service.server');
  app.get('/api/collection/:collection/:entryId', entry.getEntryById);
  app.post('/api/collection/:collection/insert', entry.createEntry);
  app.put('/api/collection/:collection/update', entry.updateEntry);
  app.delete('/api/collection/:collection/delete', entry.deleteEntry);
};