const _ = require('lodash');
const Entry = require('../models/entry.model.server')

function createEntry(req, res) {
  if (!req.params.collectionName) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Entry.createEntry(req.params.collectionName, req.body, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
}

function getEntryById(req, res) {
  if (_.has(req.params, 'collectionName') && _.has(req.params, 'entryId')) {
    Entry.getEntryById(req.params.collectionName, req.params.entryId, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
  else {
    res.status(400).send({ error: true, message: 'Incomplete query, please provide name of the collection and the entry ID' });
  }
}

function getEntries(req, res) {
  if (_.has(req.params, 'collectionName')) {
    Entry.getEntries(req.params.collectionName, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
  else {
    res.status(400).send({ error: true, message: 'Incomplete query, please provide name of the collection' });
  }
}

function updateEntry(req, res) {
  if (!req.params.collectionName) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Entry.updateEntry(req.params.collectionName, req.body, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
}

function deleteEntry(req, res) {
  if (!req.params.collectionName) {
    res.status(400).send({ error: true, message: 'Please provide name of the collection' });
  }
  else {
    Entry.deleteEntry(req.params.collectionName, req.body, function (err, entry) {
      if (err) res.send(err);
      else res.json(entry);
    });
  }
}

module.exports = {
  createEntry,
  getEntryById,
  getEntries,
  updateEntry,
  deleteEntry
}