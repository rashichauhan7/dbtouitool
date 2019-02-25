var MysqlJson = require('mysql-json');
var mysqlJson = new MysqlJson({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b645f03867d471',
    password: '4cdaa4d1',
    database: 'heroku_b9591a250142bf1'
});


function loopArray(table, structure) {
    return new Promise((resolve => {
        mysqlJson.query("describe " + table, function (err, response) {
            response = JSON.parse(JSON.stringify(response));
            for (var j = 0; j < response.length; j++) {
                structure[table][j] = {};
                structure[table][j].field = Object.values(response[j])[0];
                structure[table][j].type = Object.values(response[j])[1];
            }
            resolve(structure[table])
        });
    }))
}

function gt(tables) {
    return new Promise((resolve => {
        let P = [];
        const structure = {};
        for (i = 0; i < tables.length; i++) {
            structure[tables[i]] = {};
        }

        for (i = 0; i < tables.length; i++) {
            P[i] = loopArray(tables[i], structure);
        }

        Promise.all(P).then((t) => {
            resolve(structure);
        })
    }))

}




function loop (tables) {
    return new Promise((resolve) => {
        let P = []
        for (i = 0; i < tables.length; i++) {
            P[i] = l(tables[i]);
        }
        Promise.all(P).then((t) => {
            table = {}
            for (i = 0; i < tables.length; i++) {
                table[tables[i]] =t[i];
            }
            resolve(table);
        })
    });
}

function l(tables) {
    return new Promise((resolve) =>{
        mysqlJson.query("SELECT * FROM " + tables, function (err, response) {
            resolve( Object.values(response));
        })
    })
    }

function getTableNames() {
    return new Promise(function(resolve) {
    var tables = [];
    mysqlJson.query("show tables", function (err, response) {
        response = JSON.parse(JSON.stringify(response));
        for (var i = 0; i < response.length; i++) {
          tables[i] = Object.values(response[i])[0];
        }
        resolve(tables);
    }
   )}
 )}







module.exports = {
    gt,
    getTableNames,
    loop
};




