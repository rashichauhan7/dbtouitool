var Collection = require('../models/collection.model.server')

function createCollection(req, res) {
  newcollection = new Collection.Collection(req.body);
  Collection.createCollection(newcollection.name, newcollection.attributes, function (err, collection) {
    if (err) res.send(err);
    else res.json(collection);
  });
}

function readCollection(req, res) {
  if (!req.params.collectionName) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Collection.readCollection(req.params.collectionName, function (err, collection) {
      if (err) res.send(err);
      else res.json(collection);
    });
  };
}

function updateCollection(req, res) {
  if (!req.params.collectionName) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Collection.updateCollection(req.params.collectionName,
      req.body.newColumnName, req.body.newColumnType, function (err, collection) {
        if (err) res.send(err);
        else res.json(collection);
      });
  };
}

function deleteCollection(req, res) {
  if (!req.params.collectionName) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Collection.deleteCollection(req.params.collectionName, function (err, collection) {
      if (err) res.send(err);
      else res.json(collection);
    });
  };
}

module.exports = {
  createCollection,
  readCollection,
  updateCollection,
  deleteCollection
}