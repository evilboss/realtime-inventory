var app = require("express")();
var server = require("http").Server(app);
var bodyParser = require("body-parser");
var PythonShell = require('python-shell');
app.use(bodyParser.json());

module.exports = app;

const getDevices = (callback) => {
    var options = "";
    PythonShell.run('../scripts/deviceList.py', options, function (err, results) {
        if (err) callback(err, null);
        // results is an array consisting of messages collected during execution
        console.log(JSON.parse(results));
        //res.send(JSON.parse(results));
        callback(null, results);
    });
};
app.get("/", function (req, res) {
    res.send("Device API");
});
app.get('/all', function (req, res) {
    getDevices(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(JSON.parse(result));
    });

});

const Devices = {};
export default Devices;