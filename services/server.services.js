module.exports = function(app, tables) {
    app.get('/api/:collection', getCollection);
    app.get('/api/:collection/:cid', getCollection);

    function getCollection(req, res) {
        collection = tables[ req.params['collection']];
        res.send(collection);
    }

    function getCollectionEntryById(req, res) {
        collection = req.params['collection'];
        id = req.params['cid'];

    }
}