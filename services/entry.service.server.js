const _ = require('lodash');
const Entry = require('../models/entry.model.server')

function createEntry(req, res) {
  if (!req.params.collection) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Entry.createEntry(req.params.collection, req.body, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
}

function getEntryById(req, res) {
  if (_.has(req.params, 'collection') && _.has(req.params, 'entryId')) {
    Entry.getEntryById(req.params.collection, req.params.entryId, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
  else {
    res.status(400).send({ error: true, message: 'Incomplete query, please provide name of the collection and the entry ID' });
  }
}

function updateEntry(req, res) {
  if (!req.params.collection) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Entry.updateEntry(req.params.collection, req.body, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
}

function deleteEntry(req, res) {
  if (!req.params.collection) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Entry.deleteEntry(req.params.collection, req.body, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
}

module.exports = {
  createEntry,
  getEntryById,
  updateEntry,
  deleteEntry
}