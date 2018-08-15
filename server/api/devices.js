var app = require("express")();
var server = require("http").Server(app);
var bodyParser = require("body-parser");
var PythonShell = require('python-shell');
app.use(bodyParser.json());

module.exports = app;
app.get("/", function (req, res) {
    res.send("Device API");
});
app.get('/all', function (req, res) {
    var options = "";
    PythonShell.run('../scripts/deviceList.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log(JSON.parse(results));
        res.send(JSON.parse(results));

    });

});

