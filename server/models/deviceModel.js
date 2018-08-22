var PythonShell = require('python-shell');
var Datastore = require("nedb");
// Creates  Database
const deviceDB = new Datastore({
    filename: "./databases/devices.db",
    autoload: true
});

// GET inventory
const getDevices = (callback) => {
    let options = "";
    PythonShell.run('../scripts/deviceList.py', options, function (err, results) {
        if (err) callback(err, null);
        callback(null, results);
    });
};

const get = (callback) => {
    getDevices((err, docs) => {
        callback(null, docs);
    });
};
const insert = (newProduct, callback) => {
    deviceDB.insert(newProduct, (err, product) => {
        callback(err, product);
    });
};
const remove = (productId) => {
    deviceDB.remove({_id: productId}, (err, numRemoved) => {
        return (err) ? err : numRemoved;
    });
};
const Devices = {
    get: get,
    insert: insert
};

export default Devices;