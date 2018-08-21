var Datastore = require("nedb");
// Creates  Database
const stocksDb = new Datastore({
    filename: "./databases/stocks.db",
    autoload: true
});


// GET inventory
const get = (callback) => {
    stocksDb.find({}, function (err, docs) {
        callback(null, docs);
    });
};
const insert = (stock) => {
    stocksDb.insert(stock, function (err, product) {
        return (err) ? err : product;
    });
};
const remove = (productId) => {
    stocksDb.remove({_id: productId}, function (err, numRemoved) {
        return (err) ? err : numRemoved;
    });
};
const Stocks = {
    get: get,
    insert: insert
};

export default Stocks;