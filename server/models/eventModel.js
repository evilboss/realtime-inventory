var Datastore = require("nedb");
// Creates  Database
const eventDB = new Datastore({
    filename: "./databases/events.db",
    autoload: true
});


const get = (callback) => {
    eventDB.find({}, (err, docs) => {
        callback(null, docs);
    });
};
const getOne = (id, callback) => {
    eventDB.findOne({_id: id}, (err, docs) => {
        callback(null, docs);
    });
};
const insert = (event, callback) => {
    eventDB.insert(event, (err, docs) => {
        callback(null, docs);
    });
};
const remove = () => {
};

const events = {
    insert: insert,
    get: get,
    remove: remove

};
export default events;