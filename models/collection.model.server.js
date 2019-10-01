// CRUD for tables/collections

_ = require('lodash');
connection = require('../connectToDB');

class Collection {

  //Collection object constructor
  constructor(collection) {
    this.name = collection.name;
    this.primarykey = _.has(collection, 'primarykey') ? collection.primarykey : null;
    this.autoincrement = _.has(collection, 'autoincrement') ? collection.autoincrement : null;
    this.attributes = _.has(collection, 'attributes')
      ? this.getAttributeString(collection.attributes, this.primarykey, this.autoincrement)
      : '';
  }

  getAttributeString(attributes, primarykey, autoincrement) {
    var attrstr = '';
    if (autoincrement != null) attributes[primarykey] += ' AUTO_INCREMENT';
    if (primarykey != null) attributes[primarykey] += ' PRIMARY KEY';
    for (const [key, value] of Object.entries(attributes)) {
      attrstr += key + ' ' + value + ', ';
    }
    attrstr = '(' + attrstr.substring(0, attrstr.length - 2) + ')';
    return attrstr;
  }
}

function createCollection(tablename, attributes, result) {
  const query = "CREATE TABLE " + tablename + " " + attributes;
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

function readCollection(tablename, result) {
  const query = "SELECT * FROM " + tablename;
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

function updateCollection(tablename, newColumnName, newColumnType, result) {
  const query = "ALTER TABLE " + tablename + " ADD " + newColumnName + " " + newColumnType;
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

function deleteCollection(tablename, result) {
  const query = "DROP TABLE " + tablename;
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

module.exports = {
  Collection,
  createCollection,
  readCollection,
  updateCollection,
  deleteCollection
};
