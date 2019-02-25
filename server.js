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

app.get('/', function(req, res) {
    res.send('Hello World!')
});



app.listen(process.env.PORT || 4000)
app.listen(5000);





var service  = require('./services/server.services');


var mysqlDb = require('./connectToMysql');


mysqlDb.getTableNames().then((t) => {
    mysqlDb.loop(t).then((t) => {
            console.log(t);
            service(app, t);
        });
});

setTimeout(function(){
    mysqlDb.getTableNames().then((t) => {
        mysqlDb.gt(t).then((structure)=> {
            console.log(structure)
        });
    });
}, 2000);
