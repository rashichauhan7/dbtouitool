var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
//hosted on https://dbtouitool.herokuapp.com


var app = express();
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));



app.listen(process.env.PORT || 4000)

var service  = require('./services/server.services');
var mysqlDb = require('./connectToMysql');

function init() {
    mysqlDb.getTableNames().then((tn) => {
        mysqlDb.loop(tn).then((t) => {
            setTimeout(function () {
                mysqlDb.gt(tn).then((structure) => {
                    service(app, t, structure, mysqlDb)
                });
            }, 2000);
        });
    });
}
init();

module.exports ={
    init
}

