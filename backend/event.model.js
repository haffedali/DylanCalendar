const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    event_title: {
        type: String
    },
    event_summary: {
        type: String
    },
    event_date: {
        type: String
    }
});

module.exports = mongoose.model('Event', Event)