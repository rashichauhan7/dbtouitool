// DML operations for tables/entrys
// - insert into table
// - get values from table

_ = require('lodash');
connection = require('../connectToDB');


function getValuesString(entryValues) {
  var valueString = String()
  _.forEach(entryValues, function (value) {
    if (typeof (value) == "string")
      valueString += ", '" + value + "'";
    else
      valueString += ", " + value;
  });
  return valueString.substr(1);
}

function getUpdateString(values) {
  var updateString = String()
  _.forEach(values, function (value, key) {
    if (typeof (value) == "string")
      updateString += key + "='" + value + "', ";
    else
      updateString += key + "=" + value + ", ";
  });
  return updateString.substr(0, updateString.length - 2);
}

function createEntry(tablename, entry, result) {
  const valueString = getValuesString(entry);
  const query = "INSERT INTO " + tablename + " VALUES (" + valueString + ")";
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

function getEntryById(tableName, entryId, result) {
  const query = "SELECT * FROM " + tableName + " WHERE id=" + entryId;
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

function updateEntry(tableName, entry, result) {
  const values = getUpdateString(entry.values);
  const condition = entry.condition;
  const query = "UPDATE " + tableName + " SET " + values + " WHERE " + condition;
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

function deleteEntry(tableName, entry, result) {
  const condition = entry.condition;
  const query = "DELETE FROM " + tableName + " WHERE " + condition;
  connection.query(query, function (err, value) {
    if (err) result(err, null);
    else result(null, value);
  });
}

module.exports = {
  createEntry,
  getEntryById,
  updateEntry,
  deleteEntry
}