import Events from '../models/events.model';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getAll = async (callback) => {
    try {
        const events = await Events.getAll();
        logger.info('sending all events...');
        callback(null, events);
    } catch (err) {
        logger.error(`Error in getting events- ${err}`);
        callback(err, null)
    }
};

controller.addEvent = async (req,callback) => {
    const eventToAdd = Events({
        value: req.body.value,
    });
    logger.info(eventToAdd);
    try {
        const savedEvent = await Events.addEvent(eventToAdd);
        logger.info('Adding event...');
        callback(null, savedEvent);
    } catch (err) {
        callback(err, null);
    }
};
controller.emit = (socket, data) => {
    socket.emit('eventList', (data));
};

controller.deleteEvent = async (req, res) => {
    const eventValue = req.body.value;
    try {
        const removedEvent = await Events.removeEvent(eventValue);
        logger.info(`Deleted Event- ${removedEvent}`);
        res.send('Event successfully deleted');
    } catch (err) {
        logger.error(`Failed to delete event- ${err}`);
        res.send('Delete failed..!');
    }
};
controller.start = (socket) => {
    list(socket);
    insert(socket);
};

export default controller;
