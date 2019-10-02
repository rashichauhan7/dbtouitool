var Structure = require('../models/structure.model.server')

function getStructure(req, res) {
  Structure.getStructure(function (err, structure) {
    if (err) res.send(err);
    else res.json(structure);
  });
}

function getCollectionStructure(req, res) {
  const collectionName = req.params['collection'];
  Structure.getCollectionStructure(collectionName, function (err, collectionStructure) {
    if (err) res.send(err);
    else res.json(collectionStructure);
  });
}

module.exports = {
  getStructure,
  getCollectionStructure
}