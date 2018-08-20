var Datastore = require("nedb");
// Creates  Database
const inventoryDB = new Datastore({
    filename: "./databases/items.db",
    autoload: true
});


// GET inventory
const get = (callback) => {
    inventoryDB.find({}, function (err, docs) {
        callback(null, docs);
    });
};
const insert = (product) => {
    inventoryDB.insert(newProduct, function (err, product) {
        return (err) ? err : product;
    });
};
const remove = (productId) => {
    inventoryDB.remove({_id: productId}, function (err, numRemoved) {
        return (err) ? err : numRemoved;
    });
};
const Inventory = {
    get: get,
    insert: insert
};

export default Inventory;