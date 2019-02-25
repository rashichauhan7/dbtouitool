module.exports = function(app, tables) {
    app.get('/api/:collection', getCollection);
    app.get('/api/:collection/:cid', getCollectionEntryById);

    function getCollection(req, res) {
        collection = tables[ req.params['collection']];
        res.send(collection);
    }

    function getCollectionEntryById(req, res) {
        collection = tables[ req.params['collection']];
        id = req.params['cid'];
        entry = collection[id];
        res.send(entry);
    }
}