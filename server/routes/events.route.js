import eventController from '../controllers/events.controller';

var app = require("express")();
var server = require("http").Server(app);
var bodyParser = require("body-parser");
app.use(bodyParser.json());

module.exports = app;


app.get('/all', (req, res) => {
    eventController.getAll((error, response) => {
        (error) ? res.send(error) : res.send(response
        )
    });
});

app.post('/new', (req, res) => {
    eventController.addEvent(req, (err, response) => {
        (err) ? res.send(err) : res.send(response);
    });
});

app.delete('/remove', (req, res) => {

});
