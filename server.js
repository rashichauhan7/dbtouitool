//hosted on https://dbtouitool.herokuapp.com
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    port = process.env.PORT || 4000;

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

var routes = require('./approutes');
routes(app);
