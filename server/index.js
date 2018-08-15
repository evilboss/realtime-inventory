import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app = express();
const server = http.createServer(app);
dotenv.config();
console.log("Server started");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.all("/*", function(req, res, next) {
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
server.listen(process.env.port, () => console.log(`Listening on port ${process.env.port}`));
