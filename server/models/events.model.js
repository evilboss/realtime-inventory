import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';
import events from '../routes/events.route';
import logger from '../core/logger/app-logger';


const EventSchema = mongoose.Schema({
  value: { type: String, required: true, unique: false, index: false },
}, { collection: 'Events' });

const EventsModel = mongoose.model('Events', EventSchema);

EventsModel.getAll = () => {
  return EventsModel.find({});
};

EventsModel.addEvent = (eventToAdd) => {
  return eventToAdd.save();
};

EventsModel.removeEvent = (eventName) => {
  return EventsModel.remove({ name: eventName });
};
export default EventsModel;
