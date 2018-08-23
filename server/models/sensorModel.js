var PythonShell = require('python-shell');
var Datastore = require("nedb");
// Creates  Database
const sensorDB = new Datastore({
    filename: "./databases/sensors.db",
    autoload: true
});


const get = (callback) => {
    sensorDB.find({}, (err, docs) => {
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