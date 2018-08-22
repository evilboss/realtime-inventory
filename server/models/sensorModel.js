var PythonShell = require('python-shell');
var Datastore = require("nedb");
// Creates  Database
const sensorDB = new Datastore({
    filename: "./databases/sensors.db",
    autoload: true
});

// GET inventory
const getSensors = (callback) => {
    let options = "";
    PythonShell.run('../scripts/deviceList.py', options, function (err, results) {
        if (err) callback(err, null);
        callback(null, results);
    });
};

const get = (callback) => {
    getSensors((err, docs) => {
        callback(null, docs);
    });
};
const set = (newProduct, callback) => {
    sensorDB.insert(newProduct, (err, product) => {
        callback(err, product);
    });
};
const remove = (productId) => {
    sensorDB.remove({_id: productId}, (err, numRemoved) => {
        return (err) ? err : numRemoved;
    });

};
const Sensors = {
    get: get,
    set: set
};

export default Sensors;