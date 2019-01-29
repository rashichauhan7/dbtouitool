var mongoose = require('mongoose')

var sql2json = require('./sqltojson');
var tables = sql2json.convert(sql);


var schema = mongoose.Schema({})
