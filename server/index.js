import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import PythonShell from 'python-shell';

const app = express();
const server = http.createServer(app);
dotenv.config();
console.log("Server started");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.all("/*", function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,X-Access-Token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});
app.get("/", function (req, res) {
    res.send(" Real time POS web app running.");
});
app.get("/python", function (req, res) {
    PythonShell.run('./python/sample.py', "", function (err, results) {
        if (err)
            throw err;
        // Results is an array consisting of messages collected during execution
        console.log(results.toString());
        res.setHeader('Content-Type', 'application/json');
        res.send((results).toString());


    });


});
server.listen(process.env.port, () => console.log(`Listening on port ${process.env.port}`));
