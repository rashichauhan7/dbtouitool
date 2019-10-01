_ = require('lodash');
connection = require('../connectToDB');

function getTableNames() {
  return new Promise(resolve => {
    var tables = [];
    connection.query("show tables", function (err, response) {
      response = JSON.parse(JSON.stringify(response));
      for (var i = 0; i < response.length; i++) {
        tables[i] = Object.values(response[i])[0];
      }
      resolve(tables);
    });
  });
}

// function loop(tables) {
//   return new Promise(resolve => {
//     let P = [];
//     for (i = 0; i < tables.length; i++) {
//       P[i] = getTableData(tables[i]);
//     }
//     Promise.all(P).then(t => {
//       table = {};
//       for (i = 0; i < tables.length; i++) {
//         table[tables[i]] = t[i];
//       }
//       resolve(table);
//     })
//   });
// }

// function getTableData(tables) {
//   return new Promise(resolve => {
//     connection.query("SELECT * FROM " + tables, function (err, response) {
//       resolve(Object.values(response));
//     });
//   });
// }


function loopArray(table, structure) {
  return new Promise(resolve => {
    connection.query("describe " + table, function (err, response) {
      response = JSON.parse(JSON.stringify(response));
      for (var j = 0; j < response.length; j++) {
        structure[table][j] = {};
        structure[table][j].field = Object.values(response[j])[0];
        structure[table][j].type = Object.values(response[j])[1];
      }
      resolve(structure[table])
    });
  });
}

function getTableStructure(tables) {
  return new Promise(resolve => {
    let P = [];
    const structure = {};
    for (i = 0; i < tables.length; i++) {
      structure[tables[i]] = {};
    }

    for (i = 0; i < tables.length; i++) {
      P[i] = loopArray(tables[i], structure);
    }

    Promise.all(P).then(t => {
      resolve(structure);
    });
  });
}

function getStructure(result) {
  getTableNames().then(tableNames => {
    getTableStructure(tableNames).then(structure => {
      result(null, structure);
    });
  });
}

function getCollectionStructure(collectionName, result) {
  getStructure(function (err, structure) {
    if (err) result(err, null);
    else {
      if (_.has(structure, collectionName)) result(null, structure[collectionName]);
      else result({
        "code": "ER_NO_SUCH_COLLECTION",
        "Message": "Collection " + collectionName + " doesn't exist",
      }, null);
    }
  });
}

module.exports = {
  getStructure,
  getCollectionStructure
}