module.exports = function (app, table, structure, tableConnection) {
    tables = table;


    app.get('/api/structure', getStructure);
    app.get('/api/structure/:collection', getCollectionStructure);
    // app.get('/api/collection/:collection', getCollection);
    app.get('/api/collection/:collection/:cid', getCollectionEntryById);
    app.post('/api/collection/:collection/insert', createEntryCollection);




    function getCollection(req, res) {
        collection = tables[req.params['collection']];
        res.send(collection);
    }

    function getCollectionEntryById(req, res) {
        collection = tables[req.params['collection']];
        id = req.params['cid'];
        entry = collection[id];
        res.send(entry);
    }

    function getStructure(req, res) {
        res.send(structure);
    }

    function getCollectionStructure(req, res) {
        res.send(structure[req.params['collection']]);
    }

    function createEntryCollection(req, res) {
        table = req.params['collection'];
        entry = "";
        values = req.body
        Object.keys(values).forEach(function (key) {
            if (typeof (values[key]) == "string")
                entry += ", '" + values[key] + "'";
            else
                entry += ", " + values[key];
        });
        entry = entry.substr(1);
        tableConnection.insertIntoTable(table, entry).then(value => res.send(value));
        server = require("../server");
        server.init();
    }
};