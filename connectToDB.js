var MysqlJson = require('mysql-json');
var connection = new MysqlJson({
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'b645f03867d471',
  password: '4cdaa4d1',
  database: 'heroku_b9591a250142bf1'
});

module.exports = connection;