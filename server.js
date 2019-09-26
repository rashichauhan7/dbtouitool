const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    port = process.env.PORT || 4000,
    MysqlJson = require('mysql-json');
//hosted on https://dbtouitool.herokuapp.com

var mysqlJson = new MysqlJson({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b645f03867d471',
    password: '4cdaa4d1',
    database: 'heroku_b9591a250142bf1'
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));


app.listen(port);
console.log('API server started on: ' + port);

var service = require('./services/server.services');
var mysqlDb = require('./connectToMysql');
var routes = require('./approutes');
routes(app);

function init() {

    mysqlDb.getTableNames().then((tableNames) => {
        mysqlDb.loop(tableNames).then((tableName) => {
            setTimeout(function () {
                mysqlDb.getTableStructure(tableNames).then((structure) => {
                    service(app, tableName, structure, mysqlDb)
                });
            }, 2000);
        });
    });
}
// init();

module.exports = {
    init
}

