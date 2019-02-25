var mongoose = require('mongoose')

var sql2json = require('./sqltojson');
var tables = sql2json.convert(sql);

var schemas = []


var schema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNo: String,
    address: String
}, {collection: 'user'});


var collectionModel = mongoose.model('CollectionModel', schema);


