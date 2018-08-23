var PythonShell = require('python-shell');
var Datastore = require("nedb");
// Creates  Database


// GET inventory
const getScales = (callback) => {
    let options = "";
    PythonShell.run('../scripts/deviceList.py', options, function (err, results) {
        if (err) callback(err, null);
        callback(null, results);
    });
};


const Scales = {
    get: get,
    set: set

};

export default Scales;