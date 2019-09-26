// this file creates a new empty database when giveen the parameters via the UI

var mysql = require('mysql');

function createDb(host, user, password, databasename) {

  var jsonvars = mysql.createConnection({
    host,
    user,
    password
  });

  jsonvars.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    jsonvars.query("CREATE DATABASE " + databasename, function (err, result) {
      if (err) throw err;
      console.log("Database created: " + result);
    });
  });

}

module.exports = {
  createDb
};
