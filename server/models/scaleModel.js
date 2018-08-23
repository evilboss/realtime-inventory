var PythonShell = require('python-shell');
var Datastore = require("nedb");
// Creates  Database


// GET inventory
const get = (callback) => {
    let options = "";
    PythonShell.run('../scripts/deviceList.py', options, function (err, results) {
        (err) ? callback(err, null) : callback(null, results);
    });
};


const Scales = {
    get: get
};

export default Scales;