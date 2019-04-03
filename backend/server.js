const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require('mongoose');
const eventRoutes = express.Router();
const PORT = 4000;

let Event = require('./event.model')

app.use(cors());
app.use(bodyParser.json());

//this makes all eventRoutes start with /events
app.use('/events', eventRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/dylancalendar', { useNewUrlParser: true });
const connection = mongoose.connection;

eventRoutes.route('/').get(function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

eventRoutes.route('/:date').get(function(req, res){
    let date = req.params.date;

    Event.find({event_date: date}, function(err, events){
        if (err) {
            console.log(err)
        } else {
            res.json(events)
        }
    })
})

eventRoutes.route('/add').post(function(req, res) {
    let event = new Event(req.body);
    event.save()
         .then(event => {
             res.status(200).json({'event': 'event added successfully'})
         })
         .catch(err => {
             res.status(400).send('adding new even failed')
         })
})

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});